
//Texte in beiden Sprachen definieren

// Englisch ab Zeile 531







// =============================================== page 1-D - intro ==========================================================
// =============================================== page 1-D - intro ==========================================================
// =============================================== page 1-D - intro ==========================================================
 

const texts = { de: {
p_intro:
`
Diese Seite ist experimentell und befindet sich noch im Aufbau.

Es werden Themen behandelt, mit denen sich der Autor - aus unterschiedlichen Gründen - wiederholt beschäftigt und die wahrscheinlich auch von allgemeinem Interesse sind.
Der Schwerpunkt der Themen liegt dabei auf physikalischen oder wirtschaftlichen Zusammenhängen, oft in Verbindung mit - sehr einfacher - Mathematik. 
`,



// Watt & Lumen *********************************************************************************************

p_Watt_Lumen:
`
<div class="spacer-60"></div>
<h1> Leistungsaufnahme und erzeugter Lichtstrom bei (LED) Leuchtmitteln</h1>


Sie möchten ein neues Leuchtmittel erwerben. Sollten Sie sich mit der Frage beschäftigen, 
wie viele Lumen erforderlich sind, könnte dieser Artikel hilfreich sein.<br><br>

Ein Leuchtmittel emittiert Strahlung. Der Strahlungsfluss des Leuchtmittels (die gesamte, in alle Raumrichtungen 
emittierte Strahlungsleistung) wird in Watt gemessen. 
Das menschliche Auge ist aber nur für einen schmalen Bereich des elektromagnetischen Spektrums empfindlich. 
Der Lichtstrom (Lumen) ist der Strahlungsfluss (Watt), gewichtet mit der spektralen Empfindlichkeit des menschlichen Auges. 
Der Lichtstrom gibt an, wie viel <strong> sichtbare Strahlung</strong> eine Lichtquelle insgesamt abgibt.<br>
Grünes Licht (λ = 555 nm): 683 lm/W, rotes oder blaues Licht: < 10 lm/W, Infrarot oder Ultraviolett: 0 lm/W.
<br><br><br>

Die untenstehende Grafik vergleicht verschiedene Leuchtmittel. 
Jedes Leuchtmittel wird durch die benötigte elektrische Leistung, den erzeugten Lichtstrom und die Farbtemperatur charakterisiert.<br><br>

Die Daten der Leuchtmittel sind in der darunter stehenden Tabelle enthalten. Sie 
sind der Beschriftung der jeweiligen Leuchtmittel entnommen (mit Ausnahme der Glühlampe). 
In die Tabelle können eigene Daten eingetragen werden. Außerdem können Zeilen hinzugefügt oder entfernt werden. <br><br>


Es ist zu erkennen, dass eine Glühlampe mit einer Leistung von 60 Watt einen vergleichbaren Lichtstrom erzeugt 
wie eine LED-Leuchte mit einer Leistung von 8 Watt ("Raum 2").<br><br>

Es besteht die Option, einen linearen Fit in die Grafik zu legen. 
Dies ist jedoch nur sinnvoll, wenn Gleiches mit Gleichem verglichen wird (z.B. zum Vergleich verschiedener LED-Leuchten).
Die Steigung der Fitkurve gibt die durchschnittliche Effizienz der Leuchtmittel an (im Beispiel etwa 115 Lumen pro Watt bei LED-Leuchtmitteln).
<br><br>

Die Grafik ist wahrscheinlich am nützlichsten, wenn man eigene Werte einträgt. Denn man selbst weiß 
am besten, welche Helligkeit in welchem Raum benötigt wird. 
So lässt sich einfach abschätzen, wie viele Lumen eine neue Lichtquelle für den jeweiligen Einsatzzweck 
haben sollte.<br><br>
`,



p_lux:
`
<strong> Beleuchtungsstärke - Bestrahlungsstärke: </strong> <br>
Die Beleuchtungsstärke beschreibt, wie viele Lumen auf einen Quadratmeter treffen. Ein Lumen pro 
Quadratmeter entspricht 1 Lux. <br>
Das strahlungstechnische Äquivalent ist die Bestrahlungsstärke. 
Sie wird in Watt pro Quadratmeter (W/m<sup>2</sup>) gemessen.
`,




// Luftfeuchtigkeit *********************************************************************************************

p_Luft_intro:
`
In der Luft ist immer auch ein gewisser Anteil an Wasser enthalten, das sich im gasförmigen Zustand befindet. 
Der Anteil von Wasser in der Luft wird in Gramm pro Kubikmeter (g/m<sup>3</sup>) gemessen.<br>

Die maximale Menge an Wasserdampf, die die Luft aufnehmen kann, hängt von der Temperatur ab. Luft mit höherer 
Temperatur kann mehr Wasserdampf aufnehmen.<br>

Die Menge an Wasserdampf in der Luft, im Vergleich zur maximalen Menge, die die Luft bei einer bestimmten Temperatur aufnehmen kann, wird 
als relative Luftfeuchtigkeit, <em>F<sub>rel</sub></em>, bezeichnet.<br><br>

Im ersten Teil unten ist eine Tabelle gezeigt, die den Zusammenhang zwischen Temperatur, Wassergehalt und Luftfeuchtigkeit darstellt.
Im zweiten Teil folgen einige Beispiele. Im dritten Teil werden die Grundlagen der Berechnung beschrieben.<br><br>

`,



p_Tabelle_howto:
`
<span style="color: #3366cc">
<em>
Spalten oder Zeilen können durch Klicken auf einen bestimmten Achsenwert ausgewählt werden. 
Durch Klicken auf einen bestimmten Prozentwert der Luftfeuchtigkeit werden der zugehörige 
Wassergehalt und die Temperatur angezeigt. Auf der x-Achse wird zudem der Taupunkt (blau) dargestellt.
Ein Doppelklick löscht die Auswahl. <br>

Der Temperaturbereich kann zwischen -45°C und +65°C gewählt werden (Gültigkeitsbereich 
der Magnus-Formel, siehe unten).<br>

Durch Klicken auf den Button mit dem Quadrat rechts oben kann man in den Vollbildmodus 
wechseln (und mit „Esc” wieder zurück).
</em>
</span>
<br><br>
`,



p_Luft_Beispiel_1:
`
<strong>Kühlschrank</strong> <br>
<div class="spacer-10"></div>
Die Temperatur im Kühlschrank beträgt 5 °C und die Luftfeuchtigkeit ist 100 %. Die 
Raumtemperatur beträgt 20 °C, die Luftfeuchtigkeit liegt bei 58 %. Dies entspricht 
einem Wassergehalt von 10 g/m<sup>3</sup>. Der Taupunkt der Raumluft liegt bei 11 °C.<br>
Wenn man eine Flasche aus dem Kühlschrank nimmt und in der Raum stellt, dann kühlt 
die Raumluft in der Umgebung der Flasche auf 5 °C ab. Dies ist kälter als der 
Taupunkt der Raumluft, die Flasche beschlägt mit Wasser.<br><br>

<div class="spacer-10"></div>

<strong>Klimatisierter Raum</strong> <br>
<div class="spacer-10"></div>
Ein Raum ist auf eine Temperatur von 20 °C klimatisiert. Die Außemtemperatur beträgt 
30 °C bei einer Feuchtigkeit von 60 %. Der Taupunkt liegt bei 21 °C. <br>
Geht jemand aus dem klimatisierten Raum ins Freie, beschlagen kühle Gegenstände (zum Beispiel 
Flaschen oder Brillengläser).<br><br>


In der <a href="LF_Grafik.html?example=0-0" target="_blank">Tabelle</a> sind die beiden Fälle von oben
dargestellt.<br> 
Orange steht für die Temperatur der Raumluft, Blau für die Temperatur im Kühlschrank und Rot für 
die Temperatur in Außenbereich.<br><br>

`,



p_Luft_Beispiel_2:
`
<strong>Schwüle Tage</strong> <br>
<div class="spacer-10"></div>

Liegt der Wassergehalt in der Luft über 13,5 g/m<sup>3</sup>, dann wird die Wetterlage als 
schwül empfunden (&rarr;
<a href='https://de.wikipedia.org/wiki/Schw%C3%BCle'>Wikipedia</a>).<br>
Wenn es heiß ist, dann fängt der Körper an zu schwitzen. Indem Wasser von der Haut verdunstet, 
kühlt sich der Körper ab. Wenn die umgebende Luft aber bereits viel Wasser enthält 
(die oben genannten 13,5 g/m<sup>3</sup>), dann kann sie nicht genug neues Wasser mehr aufnehmen, 
die Haut kann also auch kein Wasser verdunsten. Der Körper kühlt sich nicht ab und man schwitzt noch mehr.<br>
Die Grafik zeigt Temperatur-Luftfeuchtigkeitskombinationen, die zu demselben  Wassergehalt von 13,5 g/m<sup>3</sup> in der Luft führen.


&rarr;
<a href="LF_Grafik.html?example=1-0" target="_blank">Schwüle Tage</a> <br><br> 

Beispiel:
<div class="spacer-10"></div>
Die Außentemperatur ist 34 °C, die Luftfeuchtigkeit beträgt 60%. In der Luft befinden sich 
22,5 g Wasser pro Kubikmeter. Dies ist mehr als das doppelte der Wassermenge, die sich an 
normalen Tagen in der Luft befindet.
&rarr;
<a href="LF_Grafik.html?example=1-1" target="_blank">Beispiel</a> 
<br><br><br>


<strong>Heiße Tage</strong> <br>
<div class="spacer-10"></div>
Man befindet sich in einem geschlossenen Raum bei einer Temperatur von 27° C und einer 
Luftfeuchtigkeit von 60 %. Da der Wassergehalt in der Luft 15 g Wasser pro Kubikmeter beträgt, 
fühlt sich die Luft schwül an.<br>
Die Außentemperatur beträgt 32 °C bei einer Luftfeuchtigkeit von 30%. Soll man bei diesen Bedingungen 
die Fenster öffnen und die noch wärmere Luft ins Zimmer lassen? <br>
Die Antwort lautet ja, denn 
in der Außenluft befinden sich nur 10 g Wasser pro Kubikmeter, was deutlich unter der Schwelle von 13,5 g liegt. 
Die Haut kann wieder Wasser verdunsten, wodurch der Körper sich abkühlen kann.


&rarr;
<a href="LF_Grafik.html?example=1-2" target="_blank">Heiße Tage</a> 
<br><br> 

`,




p_Luft_Beispiel_3:
`
<strong> Wohnraum </strong> <br>
<div class="spacer-10"></div>
Ein typischer Wohnraum hat eine Temperatur von 20 °C bei einer relativen Luftfeuchtigkeit von 58%. 
Dies entspricht einem Wassergehalt von 10 g/m<sup>3</sup>. <br>
&rarr;
<a href="LF_Grafik.html?example=2-0" target="_blank">Wohnraum</a> <br><br><br>




<strong> Keller</strong> <br>
<div class="spacer-10"></div>
Wann man im Keller lüften sollte und wann besser nicht.<br><br>

Die Temperatur im Keller beträgt 16 °C und die Luftfeuchtigkeit ist 70 %.<br><br>
Fall A:<br>
Die Außentemperatur beträgt 14 °C, die Luftfeuchtigkeit liegt bei 50 %.
Wenn man den Keller lüftet, erwärmt sich die einströmende Luft auf 16 °C und ihre relative 
Feuchtigkeit sinkt auf 44 %. Die Luftfeuchtigkeit im Keller nimmt ab.<br><br>
Fall B:<br>
Die Außentemperatur beträgt 24 °C, die Luftfeuchtigkeit liegt bei 50 % (also niedriger als im Keller).
Wenn man den Keller jetzt lüftet, kühlt sie sich die einströmende Luft auf 16 °C ab und ihre 
relative Feuchtigkeit nimmt auf 81 % zu. Die Luftfeuchtigkeit im Keller steigt an.<br><br>


In der Grafik sind die drei Fälle visualisiert &rarr; <a href="LF_Grafik.html?example=2-2" target="_blank">Keller</a> <br> 

Grün steht für die aktuelle Kellertemperatur, Blau für Fall A und Rot für Fall B.<br><br>


Erklärung:<br>
Die Luft im Keller (16 °C, 70 %) hat einen Wassergehalt von 9,5 g/m<sup>3</sup>. 
Die Luft in Fall A hat einen Wassergehalt von 6 g/m<sup>3</sup>, also weniger als die jetzige 
Luft im Keller. Die Luft in Fall B hat hingegegen einen Wassergehalt von 11 g/m<sup>3</sup>, 
also mehr als die jetzige Luft im Keller.<br><br>

Lüften im Keller ist dann sinnvoll, wenn die vorhandene Luft durch Luft mit einem 
niedrigeren Wassergehalt pro Volumen ersetzt wird.<br><br><br>



<strong> Schimmelrisiko </strong> <br>
<div class="spacer-10"></div>
Sinkt die Temperatur auf den Taupunkt des Wassers, besteht Schimmelgefahr.
Dies ist bereits der Fall bei einer Raumtemperatur von 16 °C und einer relativen 
Luftfeuchtigkeit von 90%. 
Die Werte entsprechen einem Wassergehalt von 12 g/m<sup>3</sup>. <br>
&rarr;
<a href="LF_Grafik.html?example=2-1" target="_blank">Schimmelrisiko</a> 

`,





p_Berechnung_Intro:
`
Zunächst wird der Sättigungsdampfdruck bei einer bestimmten Temperatur bestimmt. 
Im zweiten Teil wird dann der Taupunkt bei einer bestimmten Luftfeuchtigkeit ermittelt.</p>
`,




p_Saettigung:
`
<!-- l. 152 --><p class='noindent'>Es wird bestimmt, wie viel Wasser die Luft bei einer bestimmten Temperatur maximal
aufnehmen kann.
</p><!-- l. 154 --><p class='indent'>   Wir gehen von der allgemeinen Gasgleichung für ideale Gase aus.<br class='newline' /><br class='newline' />
</p><!-- l. 156 --><p class='noindent'><span class='ec-lmbx-10x-x-109'>Allgemeine Gasgleichung</span>: <span class='spacer20'></span>
</p><!-- l. 160 --><p class='indent'>   Die allgemeine Gasgleichung beschreibt den Zustand eines idealen Gases bezüglich der
Größen Druck, Volumen, Temperatur und Stoffmenge:
</p><!-- l. 162 --><p class='indent'>   <span class='vspace20'></span>
</p>
   <table class='equation'><tr><td>                                                                            

                                                                                
<!-- l. 164 --><math class='equation' display='block'><mrow>
                                   <mstyle class='label' id='x1-2r1'></mstyle><!-- endlabel --><mi mathvariant='italic'>𝑝𝑉</mi> <mo class='MathClass-rel' stretchy='false'>=</mo> <mi mathvariant='italic'>𝑛𝑅𝑇</mi>
</mrow></math></td><td class='eq-no'>(1)</td></tr></table>
<!-- l. 166 --><p class='noindent'>
</p><!-- l. 168 --><p class='indent'>   <span class='vspace10'></span>
</p>
   <div class='narrowtable'> <!-- tex4ht:inline --><div class='tabular'> <table class='tabular' id='TBL-1'><colgroup id='TBL-1-1g'><col id='TBL-1-1' /><col id='TBL-1-2' /><col id='TBL-1-3' /><col id='TBL-1-4' /></colgroup><tr id='TBL-1-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-1-1-1' style='text-align:left; white-space:nowrap;'> <!-- l. 172 --><math display='inline'><mi>p</mi></math> </td><td class='td11' id='TBL-1-1-2' style='text-align:left; white-space:nowrap;'> : Druck         </td><td class='td11' id='TBL-1-1-3' style='text-align:left; white-space:nowrap;'> <!-- l. 172 --><math display='inline'><mspace class='quad' width='1em'></mspace></math> </td><td class='td11' id='TBL-1-1-4' style='text-align:left; white-space:nowrap;'> Pa (Pascal) = 1 N/<!-- l. 172 --><math display='inline'><msup><mrow><mstyle mathvariant='normal'><mi>m</mi></mstyle></mrow><mrow><mn>2</mn></mrow></msup></math>  </td>
</tr><tr id='TBL-1-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-1-2-1' style='text-align:left; white-space:nowrap;'> <!-- l. 173 --><math display='inline'><mrow><mi>V</mi> </mrow></math>  </td><td class='td11' id='TBL-1-2-2' style='text-align:left; white-space:nowrap;'> : Volumen      </td><td class='td11' id='TBL-1-2-3' style='text-align:left; white-space:nowrap;'>                                                                           </td><td class='td11' id='TBL-1-2-4' style='text-align:left; white-space:nowrap;'> <!-- l. 173 --><math display='inline'><msup><mrow><mstyle mathvariant='normal'><mi>m</mi></mstyle></mrow><mrow><mn>3</mn></mrow></msup></math>                                   </td>
</tr><tr id='TBL-1-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-1-3-1' style='text-align:left; white-space:nowrap;'> <!-- l. 174 --><math display='inline'><mi>T</mi></math>  </td><td class='td11' id='TBL-1-3-2' style='text-align:left; white-space:nowrap;'> : Temperatur  </td><td class='td11' id='TBL-1-3-3' style='text-align:left; white-space:nowrap;'>                                                                           </td><td class='td11' id='TBL-1-3-4' style='text-align:left; white-space:nowrap;'> K (Kelvin)                                                                                                                                </td>
</tr><tr id='TBL-1-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-1-4-1' style='text-align:left; white-space:nowrap;'> <!-- l. 175 --><math display='inline'><mi>n</mi></math>  </td><td class='td11' id='TBL-1-4-2' style='text-align:left; white-space:nowrap;'> : Stoffmenge   </td><td class='td11' id='TBL-1-4-3' style='text-align:left; white-space:nowrap;'>                                                                           </td><td class='td11' id='TBL-1-4-4' style='text-align:left; white-space:nowrap;'> mol                                                                                                                                         </td>
</tr></table>                                                                                                                                                                                         </div>
</div>
<!-- l. 179 --><p class='indent'>   <!-- l. 179 --><math display='inline'><mi>R</mi></math> ist die allgemeine
Gaskonstante: <!-- l. 179 --><math display='inline'><mrow><mi>R</mi> <mo class='MathClass-rel' stretchy='false'>=</mo> <mn>8.31446261815324</mn></mrow></math>
J/(K mol)<br class='newline' />
</p><!-- l. 182 --><p class='indent'>   Aus Gleichung 1 ergibt sich für die Dichte des Gases (in Mol/Volumen):<br class='newline' />
</p><!-- l. 184 --><p class='indent'>   <span class='vspace20'></span>
</p>
   <table class='equation'><tr><td>
<!-- l. 186 --><math class='equation' display='block'><mrow>
                                    <mstyle class='label' id='x1-3r2'></mstyle><!-- endlabel --> <mfrac><mrow><mi>n</mi></mrow>
<mrow><mi>V</mi> </mrow></mfrac> <mo class='MathClass-rel' stretchy='false'>=</mo>   <mfrac><mrow><mi>p</mi></mrow> 
<mrow><mi mathvariant='italic'>𝑅𝑇</mi></mrow></mfrac>
</mrow></math></td><td class='eq-no'>(2)</td></tr></table>
<!-- l. 188 --><p class='noindent'>
</p><!-- l. 190 --><p class='indent'>   1 Mol Wasser hat eine Masse von etwa 18 Gramm (18,02 Gramm).<br class='newline' />
</p><!-- l. 192 --><p class='indent'>   Um die Dichte berechnen zu können, wird der Druck des Wasserdampfes benötigt. Setzt
man für den Druck den Sättigungsdampfdruck ein, erhält man die maximal mögliche
Wassermenge in der Luft.<br class='newline' /><br class='newline' /><br class='newline' />
</p><!-- l. 197 --><p class='noindent'><span class='ec-lmbx-10x-x-109'>Sättigungsdampfdruck und Magnus-Formel</span>: <span class='spacer20'></span>
</p><!-- l. 201 --><p class='indent'>   Aus Flüssigkeiten entweichen solange Atome/Moleküle in die Gasphase, bis sich darin
ein von der Temperatur abhängiger Druck eingestellt hat. Die Verdampfung der Flüssigkeit
ist dann mengenmäßig gleich der Kondensation. Der sich einstellende Gasdruck wird als
Sättigungsdampfdruck bezeichnet. Beim Sättigungsdampfdruck von Wasser ist die Luft
maximal mit Wasserdampf gesättigt.
</p><!-- l. 204 --><p class='indent'>   <div class='spacer10'></div>
</p><!-- l. 206 --><p class='indent'>   Die empirische Formel von Magnus beschreibt den Sättigungsdampfdruck
<!-- l. 206 --><math display='inline'><msub><mrow><mi>p</mi></mrow><mrow><mi>S</mi></mrow></msub></math>
(aber nicht den allgemeinen Dampfdruck) als Funktion der Temperatur
(<!-- l. 206 --><math display='inline'><mrow> <mo class='MathClass-rel' stretchy='false'>→</mo></mrow></math>
<a href='https://de.wikipedia.org/wiki/S%C3%A4ttigungsdampfdruck'>Wikipedia</a>) <br class='newline' />WICHTIG: Die Temperatur <!-- l. 208 --><math display='inline'><mi>T</mi></math>
muss hier in °C eingesetzt werden.
</p><!-- l. 210 --><p class='indent'>   <span class='vspace20'></span> </p><table class='equation'><tr><td>
<!-- l. 211 --><math class='equation' display='block'><mrow>
                    <mstyle class='label' id='x1-4r3'></mstyle><!-- endlabel --><msub><mrow><mi>p</mi></mrow><mrow><mi>S</mi></mrow></msub> <mo class='MathClass-rel' stretchy='false'>=</mo> <mi>c</mi><mspace class='thinspace' width='0.17em'></mspace> <mo class='MathClass-bin' stretchy='false'>⋅</mo><mi class='loglike'>exp</mi><mo>⁡<!-- FUNCTION APPLICATION --></mo><!-- nolimits --><mspace class='negthinspace' width='-0.17em'></mspace> <mrow><mo fence='true' form='prefix'>(</mo><mrow> <mfrac><mrow><mi>a</mi> <mo class='MathClass-bin' stretchy='false'>⋅</mo> <mi>T</mi></mrow>
<mrow><mi>b</mi> <mo class='MathClass-bin' stretchy='false'>+</mo> <mi>T</mi></mrow></mfrac> </mrow><mo fence='true' form='postfix'>)</mo></mrow><mspace class='qquad' width='2em'></mspace><mstyle class='text'><mtext class='textrm' mathvariant='normal'>für -45°C</mtext></mstyle> <mo class='MathClass-rel' stretchy='false'>≤</mo> <mi>T</mi> <mo class='MathClass-rel' stretchy='false'>≤</mo><mstyle class='text'><mtext class='textrm' mathvariant='normal'>65°C</mtext></mstyle>
</mrow></math></td><td class='eq-no'>(3)</td></tr></table>
<!-- l. 213 --><p class='noindent'>
</p>
   <div class='narrowtable'>  <!-- tex4ht:inline --><div class='tabular'> <table class='tabular' id='TBL-2'><colgroup id='TBL-2-1g'><col id='TBL-2-1' /><col id='TBL-2-2' /></colgroup><tr id='TBL-2-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-2-1-1' style='text-align:left; white-space:nowrap;'> c  </td><td class='td11' id='TBL-2-1-2' style='text-align:left; white-space:nowrap;'> : 6,112 hPa  </td>
</tr><tr id='TBL-2-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-2-2-1' style='text-align:left; white-space:nowrap;'> a  </td><td class='td11' id='TBL-2-2-2' style='text-align:left; white-space:nowrap;'> : 17,62        </td>
</tr><tr id='TBL-2-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-2-3-1' style='text-align:left; white-space:nowrap;'> b  </td><td class='td11' id='TBL-2-3-2' style='text-align:left; white-space:nowrap;'> : 243,12      </td> </tr></table>                                                                                     </div>
</div>
<!-- l. 223 --><p class='indent'>   <!-- l. 223 --><math display='inline'><mi>T</mi></math>:
Temperatur in °C<br class='newline' /><br class='newline' />
</p><!-- l. 225 --><p class='indent'>   <span style='color:#0066AB;'><span class='ec-lmbxi-10x-x-109'>Beispiele – Gleichung (</span><a href='#x1-4r3'><span class='ec-lmbxi-10x-x-109'>3</span><!-- tex4ht:ref: eq_Magnus  --></a><span class='ec-lmbxi-10x-x-109'>):</span></span><br class='newline' /><div class='spacer10'></div> <span style='color:#0066AB;'> <span class='ec-lmri-10x-x-109'>a) Die Temperatur beträgt </span><!-- l. 230 --><math display='inline'><mrow><mi>T</mi> <mo class='MathClass-rel' stretchy='false'>=</mo></mrow></math><span class='ec-lmri-10x-x-109'>20°C.</span>
<br class='newline' /><span class='ec-lmri-10x-x-109'>Der Sättigungsdampfdruck von Wasser beträgt 23,33 hPa. </span></span>
</p><!-- l. 235 --><p class='indent'>   <span style='color:#0066AB;'> <span class='ec-lmri-10x-x-109'>b) Die Temperatur beträgt </span><!-- l. 235 --><math display='inline'><mrow><mi>T</mi> <mo class='MathClass-rel' stretchy='false'>=</mo></mrow></math><span class='ec-lmri-10x-x-109'>60°C.</span>
<br class='newline' /><span class='ec-lmri-10x-x-109'>Der Sättigungsdampfdruck von Wasser beträgt 199.93 hPa. </span></span>
                                                                                

                                                                                
</p><!-- l. 240 --><p class='indent'>   <span style='color:#0066AB;'> <span class='ec-lmri-10x-x-109'>c) Die Temperatur beträgt </span><!-- l. 240 --><math display='inline'><mrow><mi>T</mi> <mo class='MathClass-rel' stretchy='false'>=</mo></mrow></math><span class='ec-lmri-10x-x-109'>100°C.</span>
<br class='newline' /><span class='ec-lmri-10x-x-109'>Diese Temperatur liegt zwar außerhalb des zulässigen Bereichs für die Anwendung der
Magnus-Formel, liefert aber immer noch gute Ergebnisse. Der damit berechnete
Sättigungsdampfdruck von Wasser beträgt 1038 hPa. Dies entspricht nahezu dem Luftdruck
auf Meereshöhe (1013 hPa). </span></span><br class='newline' /><br class='newline' /><span class='ec-lmri-10x-x-109'>Eine Flüssigkeit beginnt zu sieden, wenn ihr Dampfdruck den atmosphärischen Druck
erreicht (weil sich dann im Inneren der Flüssigkeit Blasen bilden können, die an die
Oberfläche aufsteigen) </span><br class='newline' /><br class='newline' /><br class='newline' />
</p><!-- l. 247 --><p class='noindent'><span class='ec-lmbx-10x-x-109'>Maximal möglicher Wassergehalt von Luft</span>: <span class='spacer20'></span>
</p><!-- l. 251 --><p class='indent'>   Mit Hilfe des Sättigungsdampfdruckes und zusammen mit Gleichung (<a href='#x1-3r2'>2<!-- tex4ht:ref: eq_nV  --></a>) kann jetzt der
Wassergehalt von Luft berechnet werden.
</p><!-- l. 253 --><p class='indent'>   <span style='color:#0066AB;'><span class='ec-lmbxi-10x-x-109'>Beispiel – Gleichung (</span><a href='#x1-3r2'><span class='ec-lmbxi-10x-x-109'>2</span><!-- tex4ht:ref: eq_nV  --></a><span class='ec-lmbxi-10x-x-109'>):</span></span><br class='newline' /><div class='spacer10'></div> <span style='color:#0066AB;'> <span class='ec-lmri-10x-x-109'>a) Die Temperatur beträgt </span><!-- l. 258 --><math display='inline'><mrow><mi>T</mi> <mo class='MathClass-rel' stretchy='false'>=</mo></mrow></math><span class='ec-lmri-10x-x-109'>20°C.</span>
<br class='newline' /><span class='ec-lmri-10x-x-109'>Mit dem Sättigungsdampfdruck von Wasser – 23,33 hPa – erhält man 0,957</span>
<!-- l. 258 --><math display='inline'><mrow><mi mathvariant='italic'>𝑚𝑜𝑙</mi><mo class='MathClass-bin' stretchy='false'>∕</mo><msup><mrow><mi>m</mi></mrow><mrow><mn>3</mn></mrow></msup></mrow></math> <span class='ec-lmri-10x-x-109'>bzw.
17,2 </span><!-- l. 258 --><math display='inline'><mrow><mi>g</mi><mo class='MathClass-bin' stretchy='false'>∕</mo><msup><mrow><mi>m</mi></mrow><mrow><mn>3</mn></mrow></msup></mrow></math><span class='ec-lmri-10x-x-109'>.</span>
</span>
</p><!-- l. 263 --><p class='indent'>   <span style='color:#0066AB;'> <span class='ec-lmri-10x-x-109'>b) Die Temperatur beträgt </span><!-- l. 263 --><math display='inline'><mrow><mi>T</mi> <mo class='MathClass-rel' stretchy='false'>=</mo></mrow></math><span class='ec-lmri-10x-x-109'>60°C.</span>
<br class='newline' /><span class='ec-lmri-10x-x-109'>Mit dem Sättigungsdampfdruck von Wasser – 199,93 hPa – erhält man 7,22</span>
<!-- l. 263 --><math display='inline'><mrow><mi mathvariant='italic'>𝑚𝑜𝑙</mi><mo class='MathClass-bin' stretchy='false'>∕</mo><msup><mrow><mi>m</mi></mrow><mrow><mn>3</mn></mrow></msup></mrow></math> <span class='ec-lmri-10x-x-109'>bzw.
129,98 </span><!-- l. 263 --><math display='inline'><mrow><mi>g</mi><mo class='MathClass-bin' stretchy='false'>∕</mo><msup><mrow><mi>m</mi></mrow><mrow><mn>3</mn></mrow></msup></mrow></math><span class='ec-lmri-10x-x-109'>.</span>
</span><br class='newline' /><br class='newline' /><br class='newline' />
</p><!-- l. 267 --><p class='indent'>   <span class='ec-lmbx-10x-x-109'>Relative Luftfeuchtigkeit:</span>
</p><!-- l. 269 --><p class='indent'>   Die relative Luftfeuchtigkeit <!-- l. 269 --><math display='inline'><msub><mrow><mi>F</mi></mrow><mrow><mi mathvariant='italic'>𝑟𝑒𝑙</mi></mrow></msub></math>
ist das Verhältnis der in der Luft enthaltenen Wassermenge
<!-- l. 269 --><math display='inline'><mi>n</mi></math> zur maximal möglichen
Wassermenge <!-- l. 269 --><math display='inline'><msub><mrow><mi>n</mi></mrow><mrow><mi mathvariant='italic'>𝑚𝑎𝑥</mi></mrow></msub></math>.
<!-- l. 269 --><math display='inline'><mi>n</mi></math> und
<!-- l. 269 --><math display='inline'><msub><mrow><mi>n</mi></mrow><mrow><mi mathvariant='italic'>𝑚𝑎𝑥</mi></mrow></msub></math> sind
die Wassermenge in Mol:
</p>
   <div class='subequations'>
                                                                                

                                                                                
<!-- tex4ht:inline --><!-- l. 276 --><math display='block'><mtable class='align' columnalign='left' displaystyle='true' rowlines='none' style=''>
                            <mtr><mtd class='align-odd' columnalign='right'><msub><mrow><mi>F</mi></mrow><mrow><mi mathvariant='italic'>𝑟𝑒𝑙</mi></mrow></msub></mtd>                            <mtd class='align-even'> <mo class='MathClass-rel' stretchy='false'>=</mo>    <mfrac><mrow><mi>n</mi><mo class='MathClass-bin' stretchy='false'>∕</mo><mi>V</mi> </mrow> 
<mrow><msub><mrow><mi>n</mi></mrow><mrow><mi mathvariant='italic'>𝑚𝑎𝑥</mi></mrow></msub><mo class='MathClass-bin' stretchy='false'>∕</mo><mi>V</mi> </mrow></mfrac> <mo class='MathClass-rel' stretchy='false'>=</mo>  <mfrac><mrow><mi>p</mi><mo class='MathClass-bin' stretchy='false'>∕</mo><mi mathvariant='italic'>𝑅𝑇</mi></mrow> 
<mrow><msub><mrow><mi>p</mi></mrow><mrow><mi>S</mi></mrow></msub><mo class='MathClass-bin' stretchy='false'>∕</mo><mi mathvariant='italic'>𝑅𝑇</mi></mrow></mfrac><mspace width='2em'></mspace></mtd>                                                        <mtd class='align-label' columnalign='right'><mstyle class='label' id='x1-6r1'></mstyle><!-- endlabel --><mstyle class='maketag'><mtext>(4a)</mtext></mstyle><mspace class='nbsp' width='0.33em'></mspace>
                            </mtd></mtr><mtr><mtd class='align-odd' columnalign='right'><mtr><mtd columnspan='3' style='height:2em;'></mtd></mtr><msub><mrow><mi>F</mi></mrow><mrow><mi mathvariant='italic'>𝑟𝑒𝑙</mi></mrow></msub></mtd>                            <mtd class='align-even'> <mo class='MathClass-rel' stretchy='false'>=</mo>    <mfrac><mrow><mi>n</mi></mrow> 
<mrow><msub><mrow><mi>n</mi></mrow><mrow><mi mathvariant='italic'>𝑚𝑎𝑥</mi></mrow></msub></mrow></mfrac> <mo class='MathClass-rel' stretchy='false'>=</mo>  <mfrac><mrow><mi>p</mi></mrow> 
<mrow><msub><mrow><mi>p</mi></mrow><mrow><mi>S</mi></mrow></msub></mrow></mfrac><mspace width='2em'></mspace></mtd>                                                               <mtd class='align-label' columnalign='right'><mstyle class='label' id='x1-7r2'></mstyle><!-- endlabel --><mstyle class='maketag'><mtext>(4b)</mtext></mstyle><mspace class='nbsp' width='0.33em'></mspace>
   </mtd></mtr>
   </mtable></math>
   </div>
<!-- l. 279 --><p class='indent'>   Ein Quotient von 0,6 entspricht einer Luftfeuchtigkeit von 60%.
</p><!-- l. 281 --><p class='indent'>   Der tatsächliche Dampfdruck <!-- l. 281 --><math display='inline'><mi>p</mi></math>
kann aus der relativen Luftfeuchtigkeit und dem Sättigungsdampfdruck
<!-- l. 281 --><math display='inline'><msub><mrow><mi>p</mi></mrow><mrow><mi>S</mi></mrow></msub></math>
berechnet werden, Gleichung (<a href='#x1-7r2'>4b<!-- tex4ht:ref: eq_rFtwo  --></a>):
</p><!-- l. 283 --><p class='indent'>   <h2 id='eq_ppp'></h2>
</p><!-- l. 285 --><p class='indent'>   <span class='vspace20'></span> </p><table class='equation'><tr><td>
<!-- l. 286 --><math class='equation' display='block'><mrow>
                                  <mstyle class='label' id='x1-8r5'></mstyle><!-- endlabel --><mi>p</mi> <mo class='MathClass-rel' stretchy='false'>=</mo> <msub><mrow><mi>F</mi></mrow><mrow><mi mathvariant='italic'>𝑟𝑒𝑙</mi></mrow></msub> <mo class='MathClass-bin' stretchy='false'>⋅</mo> <msub><mrow><mi>p</mi></mrow><mrow><mi>S</mi></mrow></msub>
</mrow></math></td><td class='eq-no'>(5)</td></tr></table>
<!-- l. 288 --><p class='noindent'>
</p>

`,



p_Taupunkt_Intro:
`
<!-- l. 149 --><p class='noindent'>Der Taupunkt kann mit Hilfe der Magnus-Formel berechnet werden. <br class='newline' /></p>
`,




p_Taupunkt_Txt:
`
<!-- l. 160 --><p class='noindent'><span class='ec-lmbx-10x-x-109'>Punkt A:</span><br class='newline' />Sättigungsdampfdruck <!-- l. 161 --><math display='inline'><msub><mrow><mi>p</mi></mrow><mrow><mi>S</mi></mrow></msub></math> bei
einer bestimmten Temperatur <!-- l. 161 --><math display='inline'><msub><mrow><mi>T</mi></mrow><mrow><mi>A</mi></mrow></msub></math>.
Die Luftfeuchtigkeit an diesem Punkt beträgt <span class='nowrap'>100 %.</span> <br class='newline' />
</p><!-- l. 164 --><p class='indent'>   <span class='ec-lmbx-10x-x-109'>Punkt B:</span><br class='newline' />Bei Punkt B herrscht die gleiche Temperatur, aber die Luftfeuchtigkeit liegt unter 100
%.
</p><!-- l. 168 --><p class='indent'>   <span class='ec-lmbx-10x-x-109'>Punkt C:</span><br class='newline' />Wenn Luft mit einer bestimmten Feuchtigkeit abkühlt (der Feuchtigkeit in Punkt B), wird bei einer bestimmten
Temperatur <!-- l. 169 --><math display='inline'><msub><mrow><mi>T</mi></mrow><mrow><mi>d</mi></mrow></msub></math>
der Taupunkt erreicht. Der Sättigungsdampfdruck beim Taupunkt                 

                                                                                
<!-- l. 170 --><math display='inline'><msub><mrow><mi>T</mi></mrow><mrow><mi>d</mi></mrow></msub></math> ist gleich dem
Dampfdruck <!-- l. 170 --><math display='inline'><mi>p</mi></math>
in Punkt B, der durch Gleichung (<a href='##eq_ppp'>5</a>) beschrieben wird:
</p>
   <div class='subequations'>
<!-- tex4ht:inline --><!-- l. 180 --><math display='block'><mtable class='align' columnalign='left' displaystyle='true' rowlines='none none none' style=''>
                     <mtr><mtd class='align-odd' columnalign='right'><msub><mrow><mi>p</mi></mrow><mrow><mi>S</mi></mrow></msub><mo class='MathClass-open' stretchy='false'>(</mo><msub><mrow><mi>T</mi></mrow><mrow><mi>d</mi></mrow></msub><mo class='MathClass-close' stretchy='false'>)</mo></mtd>                           <mtd class='align-even'> <mo class='MathClass-rel' stretchy='false'>=</mo> <msub><mrow><mi>F</mi></mrow><mrow><mi mathvariant='italic'>𝑟𝑒𝑙</mi></mrow></msub> <mo class='MathClass-bin' stretchy='false'>⋅</mo> <msub><mrow><mi>p</mi></mrow><mrow><mi>S</mi></mrow></msub><mo class='MathClass-open' stretchy='false'>(</mo><msub><mrow><mi>T</mi></mrow><mrow><mi>A</mi></mrow></msub><mo class='MathClass-close' stretchy='false'>)</mo><mspace width='2em'></mspace></mtd>                                                <mtd class='align-label' columnalign='right'><mstyle class='label' id='x1-3r1'></mstyle><!-- endlabel --><mstyle class='maketag'><mtext>(6a)</mtext></mstyle><mspace class='nbsp' width='0.33em'></mspace>
                     </mtd></mtr><mtr><mtd class='align-odd' columnalign='right'><mtr><mtd columnspan='3' style='height:2.5em;'></mtd></mtr><mi>c</mi><mspace class='thinspace' width='0.17em'></mspace> <mo class='MathClass-bin' stretchy='false'>⋅</mo><mi class='loglike'>exp</mi><mo>⁡<!-- FUNCTION APPLICATION --></mo><!-- nolimits --><mspace class='negthinspace' width='-0.17em'></mspace> <mrow><mo fence='true' form='prefix'>(</mo><mrow> <mfrac><mrow><mi>a</mi> <mo class='MathClass-bin' stretchy='false'>⋅</mo> <msub><mrow><mi>T</mi></mrow><mrow><mi>d</mi></mrow></msub></mrow>
<mrow><mi>b</mi> <mo class='MathClass-bin' stretchy='false'>+</mo> <msub><mrow><mi>T</mi></mrow><mrow><mi>d</mi></mrow></msub></mrow></mfrac> </mrow><mo fence='true' form='postfix'>)</mo></mrow></mtd>                     <mtd class='align-even'> <mo class='MathClass-rel' stretchy='false'>=</mo> <msub><mrow><mi>F</mi></mrow><mrow><mi mathvariant='italic'>𝑟𝑒𝑙</mi></mrow></msub> <mo class='MathClass-bin' stretchy='false'>⋅</mo> <mi>c</mi><mspace class='thinspace' width='0.17em'></mspace> <mo class='MathClass-bin' stretchy='false'>⋅</mo><mi class='loglike'>exp</mi><mo>⁡<!-- FUNCTION APPLICATION --></mo><!-- nolimits --><mspace class='negthinspace' width='-0.17em'></mspace> <mrow><mo fence='true' form='prefix'>(</mo><mrow> <mfrac><mrow><mi>a</mi> <mo class='MathClass-bin' stretchy='false'>⋅</mo> <msub><mrow><mi>T</mi></mrow><mrow><mi>A</mi></mrow></msub></mrow>
<mrow><mi>b</mi> <mo class='MathClass-bin' stretchy='false'>+</mo> <msub><mrow><mi>T</mi></mrow><mrow><mi>A</mi></mrow></msub></mrow></mfrac> </mrow><mo fence='true' form='postfix'>)</mo></mrow><mspace width='2em'></mspace></mtd>                                          <mtd class='align-label' columnalign='right'><mstyle class='label' id='x1-4r2'></mstyle><!-- endlabel --><mstyle class='maketag'><mtext>(6b)</mtext></mstyle><mspace class='nbsp' width='0.33em'></mspace>
                     </mtd></mtr><mtr><mtd class='align-odd' columnalign='right'><mtr><mtd columnspan='3' style='height:2.5em;'></mtd></mtr> <mfrac><mrow><mi>a</mi> <mo class='MathClass-bin' stretchy='false'>⋅</mo> <msub><mrow><mi>T</mi></mrow><mrow><mi>d</mi></mrow></msub></mrow>
<mrow><mi>b</mi> <mo class='MathClass-bin' stretchy='false'>+</mo> <msub><mrow><mi>T</mi></mrow><mrow><mi>d</mi></mrow></msub></mrow></mfrac></mtd>                           <mtd class='align-even'> <mo class='MathClass-rel' stretchy='false'>=</mo> <mi mathvariant='italic'>𝑙𝑛</mi><mspace class='thinspace' width='0.17em'></mspace><msub><mrow><mi>F</mi></mrow><mrow><mi mathvariant='italic'>𝑟𝑒𝑙</mi></mrow></msub> <mo class='MathClass-bin' stretchy='false'>+</mo>  <mfrac><mrow><mi>a</mi> <mo class='MathClass-bin' stretchy='false'>⋅</mo> <msub><mrow><mi>T</mi></mrow><mrow><mi>A</mi></mrow></msub></mrow> 
<mrow><mi>b</mi> <mo class='MathClass-bin' stretchy='false'>+</mo> <msub><mrow><mi>T</mi></mrow><mrow><mi>A</mi></mrow></msub></mrow></mfrac><mspace width='2em'></mspace></mtd>                                             <mtd class='align-label' columnalign='right'><mstyle class='label' id='x1-5r3'></mstyle><!-- endlabel --><mstyle class='maketag'><mtext>(6c)</mtext></mstyle><mspace class='nbsp' width='0.33em'></mspace>
   </mtd></mtr>
   </mtable></math>
   </div>
<!-- l. 186 --><p class='indent'>   <span class='vspace60'></span><br class='newline' />
</p><!-- l. 188 --><p class='indent'>   <span class='ec-lmbx-10x-x-109'>Taupunkt:</span><br class='newline' />
</p><!-- l. 190 --><p class='indent'>   Um den Taupunkt <!-- l. 190 --><math display='inline'><msub><mrow><mi>T</mi></mrow><mrow><mi>d</mi></mrow></msub></math>
zu berechnen, wird zunächst eine Abkürzung eingeführt. Der Ausdruck
rechts des Gleichheitszeichens in Gleichung (<a href='#x1-5r3'>6c<!-- tex4ht:ref: eq_ln  --></a>), der die aktuelle Temperatur
<!-- l. 190 --><math display='inline'><msub><mrow><mi>T</mi></mrow><mrow><mi>A</mi></mrow></msub></math> und die aktuelle
Luftfeuchtigkeit <!-- l. 190 --><math display='inline'><msub><mrow><mi>F</mi></mrow><mrow><mi mathvariant='italic'>𝑟𝑒𝑙</mi></mrow></msub></math>
enthält, wird mit Gamma abgekürzt:
</p><!-- l. 192 --><p class='indent'>   <span class='vspace20'></span>
</p>
   <table class='equation'><tr><td>
                                                                                

                                                                                
<!-- l. 194 --><math class='equation' display='block'><mrow>
                              <mstyle class='label' id='x1-6r7'></mstyle><!-- endlabel --><mi>γ</mi> <mo class='MathClass-rel' stretchy='false'>=</mo> <mi mathvariant='italic'>𝑙𝑛</mi><mspace class='thinspace' width='0.17em'></mspace><msub><mrow><mi>F</mi></mrow><mrow><mi mathvariant='italic'>𝑟𝑒𝑙</mi></mrow></msub> <mo class='MathClass-bin' stretchy='false'>+</mo>  <mfrac><mrow><mi>a</mi> <mo class='MathClass-bin' stretchy='false'>⋅</mo> <msub><mrow><mi>T</mi></mrow><mrow><mi>A</mi></mrow></msub></mrow> 
<mrow><mi>b</mi> <mo class='MathClass-bin' stretchy='false'>+</mo> <msub><mrow><mi>T</mi></mrow><mrow><mi>A</mi></mrow></msub></mrow></mfrac>
</mrow></math></td><td class='eq-no'>(7)</td></tr></table>
<!-- l. 196 --><p class='noindent'>
</p><!-- l. 200 --><p class='indent'>   Damit wird Gleichung (<a href='#x1-5r3'>6c<!-- tex4ht:ref: eq_ln  --></a>) zu:
</p><!-- l. 202 --><p class='indent'>   <span class='vspace20'></span> </p><table class='equation'><tr><td>
<!-- l. 203 --><math class='equation' display='block'><mrow>
                                   <mstyle class='label' id='x1-7r8'></mstyle><!-- endlabel --> <mfrac><mrow><mi>a</mi> <mo class='MathClass-bin' stretchy='false'>⋅</mo> <msub><mrow><mi>T</mi></mrow><mrow><mi>d</mi></mrow></msub></mrow>
<mrow><mi>b</mi> <mo class='MathClass-bin' stretchy='false'>+</mo> <msub><mrow><mi>T</mi></mrow><mrow><mi>d</mi></mrow></msub></mrow></mfrac> <mo class='MathClass-rel' stretchy='false'>=</mo> <mi>γ</mi>
</mrow></math></td><td class='eq-no'>(8)</td></tr></table>
<!-- l. 205 --><p class='noindent'>
</p><!-- l. 208 --><p class='indent'>   Daraus kann nun der Taupunkt berechnet werden:
</p><!-- l. 210 --><p class='indent'>   <span class='vspace20'></span> </p><table class='equation'><tr><td>
<!-- l. 211 --><math class='equation' display='block'><mrow>
                                   <mstyle class='label' id='x1-8r9'></mstyle><!-- endlabel --><msub><mrow><mi>T</mi></mrow><mrow><mi>d</mi></mrow></msub> <mo class='MathClass-rel' stretchy='false'>=</mo>   <mfrac><mrow><mi mathvariant='italic'>𝛾𝑏</mi></mrow> 
<mrow><mi>a</mi> <mo class='MathClass-bin' stretchy='false'>−</mo> <mi>γ</mi></mrow></mfrac>
</mrow></math></td><td class='eq-no'>(9)</td></tr></table>
<!-- l. 213 --><p class='noindent'><br class='newline' />
</p><!-- l. 217 --><p class='indent'>   <span style='color:#0066AB;'><span class='ec-lmbxi-10x-x-109'>Beispiel – Gleichung (</span><a href='#x1-8r9'><span class='ec-lmbxi-10x-x-109'>9</span><!-- tex4ht:ref: eq_Td  --></a><span class='ec-lmbxi-10x-x-109'>):</span></span><br class='newline' /><div class='spacer10'></div> <span style='color:#0066AB;'> <span class='ec-lmri-10x-x-109'>Die Temperatur beträgt </span><!-- l. 224 --><math display='inline'><mrow><msub><mrow><mi>T</mi></mrow><mrow><mi>A</mi></mrow></msub> <mo class='MathClass-rel' stretchy='false'>=</mo></mrow></math><span class='ec-lmri-10x-x-109'>20°C
und die relative Luftfeuchtigkeit </span><!-- l. 224 --><math display='inline'><mrow><msub><mrow><mi>F</mi></mrow><mrow><mi mathvariant='italic'>𝑟𝑒𝑙</mi></mrow></msub> <mo class='MathClass-rel' stretchy='false'>=</mo> <mn>58</mn><mi>%</mi></mrow></math><span class='ec-lmri-10x-x-109'>.</span><br class='newline' /><span class='ec-lmri-10x-x-109'>a = 17.62 und b = 243,12, wie in Gleichung 3. </span><br class='newline' /><span class='ec-lmri-10x-x-109'>Damit wird </span><!-- l. 224 --><math display='inline'><mrow><mi>γ</mi> <mo class='MathClass-rel' stretchy='false'>=</mo> <mn>0</mn><mo class='MathClass-punc' stretchy='false'>,</mo><mn>79</mn></mrow></math><span class='ec-lmri-10x-x-109'>.</span>
                                                                                

                                                                                
<br class='newline' /><span class='ec-lmri-10x-x-109'>Der Taupunkt </span><!-- l. 224 --><math display='inline'><msub><mrow><mi>T</mi></mrow><mrow><mi>d</mi></mrow></msub></math>
<span class='ec-lmri-10x-x-109'>beträgt 11°C. </span></span>
</p>

`,




// THM *********************************************************************************************

p_THM:
`
<div class="spacer-60"></div>
<h1>The Hidden Math Between Market and Sales Development</h1>


Wie bei der Bewertung von Leuchtmitteln oder der Betrachtung der Luftfeuchtigkeit reicht es oft nicht, einzelne Zahlen isoliert zu betrachten. 
Erst durch den Zusammenhang mehrerer Größen entsteht ein aussagekräftiges Bild.<br>

Genau dieses Denken in Zusammenhängen steht im Mittelpunkt des folgenden Buches, das die mathematischen 
Beziehungen zwischen Markt- und Umsatzentwicklung eines Unternehmens beschreibt.<br><br>

`,



ISBN:
`
ISBN: 978-3-00-080521-9<br>
277 Seiten, 47 Abbildungen<br>
Gebundene Ausgabe <br>
E-book: September 2026<br><br>`,


  },


};

