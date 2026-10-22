// f1
function getRows() {
  return Array.from(document.querySelectorAll("#dataTable tr")).slice(1);
}


// f2
function getData() {
  const x = [], y = [], meta = [], temp = [];
  getRows().forEach(row => {
    const inputs = row.querySelectorAll("input");
    const name = inputs[0].value;
    const xi = parseFloat(inputs[1].value);
    const yi = parseFloat(inputs[2].value);
    const tInput = parseFloat(inputs[3].value);
    const t = !isNaN(tInput) ? tInput : 3500; // Standard-Farbtemperatur (grau) wenn nicht vorhanden
    const comment = inputs[4].value;
    const fitCheckbox = inputs[5];
    const isChecked = fitCheckbox.type === 'checkbox' ? fitCheckbox.checked : true;

    // Nur Leistung und Lichtstrom erforderlich - Punkt wird angezeigt, auch wenn Farbtemperatur fehlt
    if (!isNaN(xi) && !isNaN(yi)) {
      x.push(xi);
      y.push(yi);
      temp.push(t);
      meta.push([name, t, comment, isChecked]);
    }
  });
  return { x, y, temp, meta };
}



// f3 - linearer Fit durch Ursprung y = a*x (nur für ausgewählte Zeilen)
function linearFitThroughOrigin(x, y, meta) {
  // Filtere nur ausgewählte Datenpunkte
  const selectedIndices = meta
    .map((m, i) => m[3] ? i : -1) // m[3] ist der Checkbox-Status
    .filter(i => i >= 0);
  
  if (selectedIndices.length < 1) return null;

  let sxy = 0, sxx = 0;
  for (let i of selectedIndices) {
    sxy += x[i] * y[i];
    sxx += x[i] * x[i];
  }

  const a = sxy / sxx;
  const b = 0;  // immer durch Ursprung
  return {a, b, selectedIndices};
}



// f4
function updateHeaders() {
  xHeader.textContent = xlabel.value || "x";
  yHeader.textContent = ylabel.value || "y";
}




// f5 - draw
function draw() {
  updateHeaders();
  const { x, y, temp, meta } = getData();

  // 🔑 Labels IMMER hier erzeugen
  const labels = meta.map(m => m[0]);

  const fit = linearFitThroughOrigin(x, y, meta);

  const fitEqSpan = document.getElementById("fitEquation");
  const fitLineSpan = document.getElementById("fitLine");   // für orange gestrichelte Linie 

  fitEqSpan.textContent = "";  // Gleichung initial leeren
  fitLineSpan.style.display = "none";                       // für orange gestrichelte Linie


  const traces = [{
    x, y,
    mode: "markers+text",
    text: labels,
    textposition: "top center",
    
    marker: { 
      size: 14,
      line: {
        width: 1.5,
        color: "black"
      },
        color: temp,          // ✅ jetzt gültig
        // colorscale: "Turbo",
        colorscale: [
          [0.0, "rgb(255,180,80)"],   // warm (orange)
          [0.5, "rgb(255,255,200)"],  // neutral
          [1.0, "rgb(180,220,255)"]   // kalt (blau)
        ],
              // cmin: 2000,          // untere Grenze (optional)
              // cmax: 6500,          // obere Grenze (optional)
        colorbar: {
          title: "Farbtem-<br>peratur (K)"
        },
    },  // end "marker"
    
    customdata: meta,                   // hier werden die Metadaten (Name, Farbtemperatur, Kommentar) an customdata übergeben
    hovertemplate:
      `<b>%{customdata[0]}</b><br>` +   // Name
      `%{x}&nbsp;W<br>` +               // Leistung
      `%{y}&nbsp;lm<br>` +              // Lichstrom
      `%{customdata[1]}&nbsp;K<br>` +   // Farbtemperatur
      `%{customdata[2]}<br>`     +      // Kommentar  
      `<extra></extra>`                 // ⬅ verhindert Zusatzkommentar
}]  // end traces


// ✅ Linearer Fit nur wenn Checkbox aktiv
  const fitToggle = document.getElementById("fitToggle");

  if (fitToggle.checked && fit) {
      const selectedIndices = fit.selectedIndices;
      
      if (selectedIndices.length > 0) {
        const xmin = Math.min(...selectedIndices.map(i => x[i]));
        const xmax = Math.max(...selectedIndices.map(i => x[i]));

        traces.push({
          x: [xmin, xmax],
          y: [fit.a*xmin + fit.b, fit.a*xmax + fit.b],
           mode: "lines",
           line: { dash: "dash", width: 2, color: "orange" }
        });

        // Gleichung daneben anzeigen und orange Linie sichtbar machen
        fitEqSpan.textContent = `y = ${fit.a.toFixed(2)} x`;
        fitLineSpan.style.display = "inline-block";
      } else {
        fitEqSpan.textContent = "";
        fitLineSpan.style.display = "none";
      }
} else {
      // Gleichung und orange Linie entfernen, falls Checkbox aus
      fitEqSpan.textContent = ""; 
      fitLineSpan.style.display = "none";
  }

  
  
  const isMobile = window.innerWidth <= 768;
  
  Plotly.react("plot", traces, {
    showlegend: false,
    margin: { t: 80, r: isMobile ? 30 : 60 },
    hovermode: "closest",
    xaxis: { showspikes: false },
    yaxis: { showspikes: false },

    xaxis: {
      title: { text: xlabel.value, font: { size: isMobile ? 14 : 18 } },
      tickfont: { size: isMobile ? 10 : 12 },
      range: [0, Math.max(Math.max(...x) * 1.05, 10)],
      showline: true,
      linewidth: 3,
      linecolor: "black",
      mirror: true,

      dtick: 10,
      showgrid: true,
      gridcolor: '#000000',

      minor: {
        dtick: 5,
        showgrid: true,
        gridcolor: '#ccc'
     }
     
    },   

    yaxis: {
      title: { text: ylabel.value, font: { size: isMobile ? 14 : 18 } },
      tickfont: { size: isMobile ? 10 : 12 },
      range: [0, null],   // ← Start bei 0
      range: [0, Math.max(Math.max(...y) * 1.10, 1000)],
      showline: true,
      linewidth: 3,
      linecolor: "black",
      mirror: true,

      dtick: 1000,
      showgrid: true,
      gridcolor: '#000000',

      minor: {
        dtick: 500,
        showgrid: true,
        gridcolor: '#ccc'
      },
      
      zeroline: false   // ← DAS entfernt die dünne schwarze Linie bei y=0, dies sonst knapp über der x-Achse und parallel zu dieser verlaufen würde
    }
    
  });
  
  // Plotly-Größe an Container anpassen
  setTimeout(() => {
    Plotly.Plots.resize("plot");
  }, 0);

  if (fit) {                              // fit ist null, wenn kein Punkt ausgewählt ist
  traces.push({                           // linearFitThroughOrigin
  x: [0, Math.max(...x)],
  y: [0, fit.a * Math.max(...x)],
  mode: "lines",
  line: { dash: "dash", width: 2, color: "orange" }
  });
  }

} // f5 - draw

var data = [{
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter'
}];





// f6 - f9: Input der Tabelle 
// f6
function addRow() {
  const row = dataTable.insertRow();
  row.innerHTML = `
    <td><input oninput="draw()"></td>
    <td><input oninput="draw()"></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input type="checkbox" class="fitCheckbox" checked></td>
    <td><button onclick="deleteRow(this)">✖</button></td>
  `;
}


// f7
function deleteRow(btn) {
  btn.closest("tr").remove();
  draw();
}


// f8
function sortByX() {
  const rows = getRows();
  rows.sort((a,b) =>
    parseFloat(a.cells[1].querySelector("input").value) -
    parseFloat(b.cells[1].querySelector("input").value)
  );
  rows.forEach(r => dataTable.appendChild(r));
  draw();
}


// f9
function clearTableInputs() {
  document
    .querySelectorAll("#dataTable tr:not(:first-child) input")
    .forEach(input => input.value = "");
}



// Nur auf der Seite mit dem Rechner (Watt und Lumen) ausführen - 
// auf anderen Seiten (z.B. Luftfeuchtigkeit) gibt es fitToggle nicht
const fitToggle = document.getElementById("fitToggle");
if (fitToggle) {

  // Live-Update
  document.addEventListener("input", e => {
    if (e.target.tagName === "INPUT") draw();
  });
  fitToggle.addEventListener("change", () => {
    // Alle Fit-Checkboxen auf den gleichen Status setzen wie fitToggle
    const allFitCheckboxes = document.querySelectorAll(".fitCheckbox");
    allFitCheckboxes.forEach(checkbox => {
      checkbox.checked = fitToggle.checked;
    });
    draw();
  });

  // Checkboxen für Fit-Auswahl auf change überwachen
  document.addEventListener("change", e => {
    if (e.target.classList.contains("fitCheckbox")) {
      // Zähle wie viele fitCheckboxes aktiviert sind
      const checkedCount = document.querySelectorAll(".fitCheckbox:checked").length;
    
      // Wenn mindestens 2 aktiviert sind, aktiviere fitToggle automatisch
      if (checkedCount >= 2) {
        fitToggle.checked = true;
      } else {
        fitToggle.checked = false;
      }
    
      draw();
    }
  });

  // Grafik neu zeichnen beim Drehen des Geräts oder Fenstergrößenänderung
  window.addEventListener("resize", () => {
    draw();
  });

  // Spezifisch für Geräte-Rotation (orientationchange Event)
  window.addEventListener("orientationchange", () => {
    // Warte kurz, bis das Betriebssystem die neue Ausrichtung vollständig registriert hat
    setTimeout(() => {
      draw();
      Plotly.Plots.resize("plot");
    }, 100);
  });

  draw();

}  // end if (fitToggle)


// 1️⃣ Beispiel-Daten


var layout = {
  title: 'Mein Plotly-Plot'
};





// Export-Funktion
function exportPlot(format) {
  Plotly.downloadImage('plot', {
    format: format,            // 'png', 'svg', 'jpeg', 'webp', 'pdf', je nach Button
    filename: 'Lichtstrom und Leuchtenleistung',
    width: 1200,
    height: 800,
    scale: 2
  });
}



