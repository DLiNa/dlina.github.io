---
layout: post
title: "The Biggest Chatterbox in German Literature"
author: [peer, dario, frank]
description: 
headline: 
modified: 2015-06-22
category: Updates
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
featured: false
---
The DLINA *zwischenformat* we [recently introduced](/Introducing-Our-Zwischenformat/) also stores amounts of speech acts, words, lines, chars. Truth be told, we will always have to cope with some erroneous and inaccurate markup contained in the TextGrid Repository TEI files here and there, but now we can roughly specify how many speech acts are executed by each character, how many words are uttered by each of them, and the amount of letters used by everybody. These values were elevated from all dramas of our [Sydney corpus](/Introducing-DLINA-Corpus-15-07-Codename-Sydney/), i.e., 465 dramas written or published inbetween 1731 and 1929.

A complete list of all 9,913 characters contained in our corpus can be found [here](https://github.com/dlina/project/blob/master/data/zwischenformat/output/amount-list.csv) (i.e., the average cast list of a play has 21 characters).

But today we're not interested in the list as a whole (we'll get back to that later), but the **top 20**. So may we acquaint you with the biggest chatterboxes of German literature (omitting the ones who are not in our corpus, of course):

|     | Character      | Title                                | Author                      | Chars  | Words | Speech acts | Additional data             |
|-----|----------------|--------------------------------------|-----------------------------|--------|-------|-------------|-----------------------------|
| 1   | GEORG          | Ignorabimus                          | Holz, Arno                  | 133443 | 20859 | 952         | [http://dlina.github.io/390/](http://dlina.github.io/390/) |
| 2   | DUFROY         | Ignorabimus                          | Holz, Arno                  | 107534 | 16588 | 885         | [http://dlina.github.io/390/](http://dlina.github.io/390/) |
| 3   | FAUST          | Faust. Der Tragödie erster Teil      | Goethe, Johann Wolfgang     | 97546  | 9037  | 225         | [http://dlina.github.io/243/](http://dlina.github.io/243/) |
| 4   | MEPHISTOPHELES | Faust. Der Tragödie erster Teil      | Goethe, Johann Wolfgang     | 92536  | 8408  | 257         | [http://dlina.github.io/243/](http://dlina.github.io/243/) |
| 5   | GOTHLAND       | Herzog Theodor von Gothland          | Grabbe, Christian Dietrich  | 86529  | 16325 | 508         | [http://dlina.github.io/158/](http://dlina.github.io/158/) |
| 6   | HOLLRIEDER     | Sonnenfinsternis                     | Holz, Arno                  | 85600  | 13544 | 663         | [http://dlina.github.io/174/](http://dlina.github.io/174/) |
| 7   | ONKEL LUDWIG   | Ignorabimus                          | Holz, Arno                  | 79066  | 12322 | 864         | [http://dlina.github.io/390/](http://dlina.github.io/390/) |
| 8   | LIBUSSA        | Die Gründung Prags                   | Brentano, Clemens           | 70723  | 13139 | 308         | [http://dlina.github.io/384/](http://dlina.github.io/384/) |
| 9   | FRANZ          | Franz von Sickingen                  | Lassalle, Ferdinand         | 67829  | 12445 | 219         | [http://dlina.github.io/287/](http://dlina.github.io/287/) |
| 10  | CARDENIO       | Halle                                | Arnim, Ludwig Achim von     | 67167  | 12299 | 237         | [http://dlina.github.io/301/](http://dlina.github.io/301/) |
| 11  | MARIANNE       | Ignorabimus                          | Holz, Arno                  | 66707  | 10383 | 766         | [http://dlina.github.io/390/](http://dlina.github.io/390/) |
| 12  | ANATOL         | Anatol                               | Schnitzler, Arthur          | 61885  | 11526 | 723         | [http://dlina.github.io/89/](http://dlina.github.io/89/)  |
| 13  | FIESCO         | Die Verschwörung des Fiesco zu Genua | Schiller, Friedrich         | 61633  | 10412 | 326         | [http://dlina.github.io/451/](http://dlina.github.io/451/) |
| 14  | MEPHISTOPHELES | Faust. Der Tragödie zweiter Teil     | Goethe, Johann Wolfgang von | 61231  | 10845 | 240         | [http://dlina.github.io/201/](http://dlina.github.io/201/) |
| 15  | CROMWELL       | Ein Faust der That                   | Bleibtreu, Karl             | 61034  | 10581 | 257         | [http://dlina.github.io/322/](http://dlina.github.io/322/) |
| 16  | LA BELLA CENCI | Sonnenfinsternis                     | Holz, Arno                  | 60956  | 10000 | 453         | [http://dlina.github.io/174/](http://dlina.github.io/174/) |
| 17  | DOKTOR FAUST   | Doktor Faust                         | Soden, Julius von           | 60696  | 10640 | 543         | [http://dlina.github.io/450/](http://dlina.github.io/450/) |
| 18  | TASSO          | Torquato Tasso                       | Goethe, Johann Wolfgang von | 60095  | 11338 | 123         | [http://dlina.github.io/82/](http://dlina.github.io/82/)  |
| 19  | FRANZ VON MOOR | Die Räuber                           | Schiller, Friedrich         | 57676  | 10303 | 172         | [http://dlina.github.io/8/](http://dlina.github.io/8/)   |
| 20  | CARLOS         | Don Carlos, Infant von Spanien       | Schiller, Friedrich         | 55514  | 10444 | 333         | [http://dlina.github.io/217/](http://dlina.github.io/217/) |

The appearance of Arno Holz and his play *Ignorabimus* seems natural, given that it's the longest play in our corpus (cf. [the corresponding blog entry](/Longest-German-Language-Theatre-Plays/)).

But let's have a closer look at the first four lines regarding only two dramas, aforementioned *Ignorabimus* and Goethe's *Faust, part I*. Their values document quite some structural differences between the two texts, or rather, they indicate a completely different way of speaking:

|     | Character      | Title                                | Author                      | Chars  | Words | Speech acts | Additional data             |
|-----|----------------|--------------------------------------|-----------------------------|--------|-------|-------------|-----------------------------|
| 1   | GEORG          | Ignorabimus                          | Holz, Arno                  | 133443 | 20859 | 952         | [http://dlina.github.io/390/](http://dlina.github.io/390/) |
| 2   | DUFROY         | Ignorabimus                          | Holz, Arno                  | 107534 | 16588 | 885         | [http://dlina.github.io/390/](http://dlina.github.io/390/) |
| 3   | FAUST          | Faust. Der Tragödie erster Teil      | Goethe, Johann Wolfgang     | 97546  | 9037  | 225         | [http://dlina.github.io/243/](http://dlina.github.io/243/) |
| 4   | MEPHISTOPHELES | Faust. Der Tragödie erster Teil      | Goethe, Johann Wolfgang     | 92536  | 8408  | 257         | [http://dlina.github.io/243/](http://dlina.github.io/243/) |

Simply put: In Arno Holz's play, characters speak much more often, but their utterances are quite short and so are the words they use. In Goethe's play, the characters speak less often, but their speeches are much longer, as are the words they use.

In any case, this difference can be explained with the whole different eras that spawned the two plays, the temporal distance amounts to more than a century. Perhaps we're witnessing the difference of two historical styles here: Isn't this difference all about pre-modern vs. modern drama?
We will discuss this further, of course, since this is the kind of quantitative evidence we are looking for when researching structural styles of dramatic texts.

But let's leave the stage to the poets for now. At first, we'll have some text by our winner, Arno Holz, followed by some notorious Goethe lines:

### 1124 characters from *Ignorabimus* (1914)

> GEORG<br />
> *in diesem Augenblick durch die Tür links; schlanke, nervöse Erscheinung; in ihrer ganzen Haltung den ehemaligen Offizier noch verratend; das dunkle Haar an den Schläfen bereits stark ergraut; Schnurrbart noch dunkel, die Augen hellgrau und durchdringend.*<br />
> Guten Morgen!<br />
> MARIANNE<br />
> *herzklopfend aufgestanden; ihn groß anstarrend; sie hat unwillkürlich versucht, die Blumen etwas zu verbergen.*<br />
> ...<br />
> GEORG<br />
> *unruhig, dabei eine Zigarette rauchend, auf und ab; seine Sprechweise ist hastig knapp.*<br />
> Du brauchst die Dinger nicht zu verstecken! ... Laßt euch nicht stören!<br />
> ONKEL LUDWIG<br />
> *die Blumen ergreifend und sie vor sich hinlegend; ruhig.*<br />
> Gib sie mir, Kind. Ich werde sie mir oben auf meine stille Stube stellen.<br />
> MARIANNE<br />
> *die sich erst jetzt etwas gefaßt hat; stockend; zu Georg.*<br />
> Hat dir der Diener ... deinen Tee schon gebracht?<br />
> GEORG<br />
> *durch dessen Ton fast permanent etwas wie Unruhe, federnde Unzufriedenheit oder Gereiztheit klingt.*<br />
> Danke. Ich rauche! ... Hatte nur so aus Gewohnheit geschellt. Reflexbewegung! Kann ihn wieder wegtragen. Pferdegetrappel.<br />
> ONKEL LUDWIG<br />
> *ablenkend; nach dem Garten hin.*<br />
> Eine Hitze draußen ...<br />
> GEORG<br />
> *kurz; sachlich.*<br />
> Ja.

### 4565 characters from *Faust. Der Tragödie erster Teil* (1808)

> FAUST.<br />
> Habe nun, ach! Philosophie,<br />
> Juristerei und Medizin,<br />
> Und leider auch Theologie<br />
> Durchaus studiert, mit heißem Bemühn.<br />
> Da steh' ich nun, ich armer Tor,<br />
> Und bin so klug als wie zuvor!<br />
> Heiße Magister, heiße Doktor gar,<br />
> Und ziehe schon an die zehen Jahr'<br />
> Herauf, herab und quer und krumm<br />
> Meine Schüler an der Nase herum –<br />
> Und sehe, daß wir nichts wissen können!<br />
> Das will mir schier das Herz verbrennen.<br />
> Zwar bin ich gescheiter als alle die Laffen,<br />
> Doktoren, Magister, Schreiber und Pfaffen;<br />
> Mich plagen keine Skrupel noch Zweifel,<br />
> Fürchte mich weder vor Hölle noch Teufel –<br />
> Dafür ist mir auch alle Freud' entrissen,<br />
> Bilde mir nicht ein, was Rechts zu wissen,<br />
> Bilde mir nicht ein, ich könnte was lehren,<br />
> Die Menschen zu bessern und zu bekehren.<br />
> Auch hab' ich weder Gut noch Geld,<br />
> Noch Ehr' und Herrlichkeit der Welt;<br />
> Es möchte kein Hund so länger leben!<br />
> Drum hab' ich mich der Magie ergeben,<br />
> Ob mir durch Geistes Kraft und Mund<br />
> Nicht manch Geheimnis würde kund;<br />
> Daß ich nicht mehr mit sauerm Schweiß<br />
> Zu sagen brauche, was ich nicht weiß;<br />
> Daß ich erkenne, was die Welt<br />
> Im Innersten zusammenhält,<br />
> Schau' alle Wirkenskraft und Samen,<br />
> Und tu' nicht mehr in Worten kramen.

> O sähst du, voller Mondenschein,<br />
> Zum letztenmal auf meine Pein,<br />
> Den ich so manche Mitternacht<br />
> An diesem Pult herangewacht:<br />
> Dann über Büchern und Papier,<br />
> Trübsel'ger Freund, erschienst du mir!<br />
> Ach! könnt' ich doch auf Bergeshöhn<br />
> In deinem lieben Lichte gehn,<br />
> Um Bergeshöhle mit Geistern schweben,<br />
> Auf Wiesen in deinem Dämmer weben,<br />
> Von allem Wissensqualm entladen,<br />
> In deinem Tau gesund mich baden!

> Weh! steck' ich in dem Kerker noch?<br />
> Verfluchtes dumpfes Mauerloch,<br />
> Wo selbst das liebe Himmelslicht<br />
> Trüb durch gemalte Scheiben bricht!<br />
> Beschränkt von diesem Bücherhauf,<br />
> Den Würme nagen, Staub bedeckt,<br />
> Den, bis ans hohe Gewölb' hinauf,<br />
> Ein angeraucht Papier umsteckt;<br />
> Mit Gläsern, Büchsen rings umstellt,<br />
> Mit Instrumenten vollgepfropft,<br />
> Urväter-Hausrat drein gestopft –<br />
> Das ist deine Welt! das heißt eine Welt!

> Und fragst du noch, warum dein Herz<br />
> Sich bang in deinem Busen klemmt?<br />
> Warum ein unerklärter Schmerz<br />
> Dir alle Lebensregung hemmt?<br />
> Statt der lebendigen Natur,<br />
> Da Gott die Menschen schuf hinein,<br />
> Umgibt in Rauch und Moder nur<br />
> Dich Tiergeripp' und Totenbein.

> Flieh! auf! hinaus ins weite Land!<br />
> Und dies geheimnisvolle Buch,<br />
> Von Nostradamus' eigner Hand,<br />
> Ist dir es nicht Geleit genug?<br />
> Erkennest dann der Sterne Lauf,<br />
> Und wenn Natur dich unterweist,<br />
> Dann geht die Seelenkraft dir auf,<br />
> Wie spricht ein Geist zum andern Geist.<br />
> Umsonst, daß trocknes Sinnen hier<br />
> Die heil'gen Zeichen dir erklärt:<br />
> Ihr schwebt, ihr Geister, neben mir;<br />
> Antwortet mir, wenn ihr mich hört!

> *Er schlägt das Buch auf und erblickt das Zeichen des Makrokosmus.*

> Ha! welche Wonne fließt in diesem Blick<br />
> Auf einmal mir durch alle meine Sinnen!<br />
> Ich fühle junges, heil'ges Lebensglück<br />
> Neuglühend mir durch Nerv' und Adern rinnen.<br />
> War es ein Gott, der diese Zeichen schrieb,<br />
> Die mir das innre Toben stillen,<br />
> Das arme Herz mit Freude füllen<br />
> Und mit geheimnisvollem Trieb<br />
> Die Kräfte der Natur rings um mich her enthüllen?<br />
> Bin ich ein Gott? Mir wird so licht!<br />
> Ich schau' in diesen reinen Zügen<br />
> Die wirkende Natur vor meiner Seele liegen.<br />
> Jetzt erst erkenn' ich, was der Weise spricht:<br />
> ›Die Geisterwelt ist nicht verschlossen;<br />
> Dein Sinn ist zu, dein Herz ist tot!<br />
> Auf, bade, Schüler, unverdrossen<br />
> Die ird'sche Brust im Morgenrot!‹

> *Er beschaut das Zeichen.*

> Wie alles sich zum Ganzen webt,<br />
> Eins in dem andern wirkt und lebt!<br />
> Wie Himmelskräfte auf und nieder steigen<br />
> Und sich die goldnen Eimer reichen!<br />
> Mit segenduftenden Schwingen<br />
> Vom Himmel durch die Erde dringen,<br />
> Harmonisch all das All durchklingen!

> Welch Schauspiel! Aber ach! ein Schauspiel nur!<br />
> Wo fass' ich dich, unendliche Natur?<br />
> Euch Brüste, wo? Ihr Quellen alles Lebens,<br />
> An denen Himmel und Erde hängt,<br />
> Dahin die welke Brust sich drängt –<br />
> Ihr quellt, ihr tränkt, und schmacht' ich so vergebens?

> *Er schlägt unwillig das Buch um und erblickt das Zeichen des Erdgeistes.*

> Wie anders wirkt dies Zeichen auf mich ein!<br />
> Du, Geist der Erde, bist mir näher;<br />
> Schon fühl' ich meine Kräfte höher,<br />
> Schon glüh' ich wie von neuem Wein,<br />
> Ich fühle Mut, mich in die Welt zu wagen,<br />
> Der Erde Weh, der Erde Glück zu tragen,<br />
> Mit Stürmen mich herumzuschlagen<br />
> Und in des Schiffbruchs Knirschen nicht zu zagen.<br />
> Es wölkt sich über mir –<br />
> Der Mond verbirgt sein Licht –<br />
> Die Lampe schwindet!<br />
> Es dampft – Es zucken rote Strahlen<br />
> Mir um das Haupt – Es weht<br />
> Ein Schauer vom Gewölb' herab<br />
> Und faßt mich an!<br />
> Ich fühl's, du schwebst um mich, erflehter Geist.<br />
> Enthülle dich!<br />
> Ha! wie's in meinem Herzen reißt!<br />
> Zu neuen Gefühlen<br />
> All' meine Sinnen sich erwühlen!<br />
> Ich fühle ganz mein Herz dir hingegeben!<br />
> Du mußt! du mußt! und kostet' es mein Leben!
