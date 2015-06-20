---
layout: post
title: "The Biggest Chatterbox in German Literatur"
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
The DLINA *zwischenformat* we [recently introduced](/Introducing-Our-Zwischenformat/) also stores amounts of speech acts, words, lines, chars. We still have to cope with some erroneous and inaccurate markup contained in the TextGrid Repository TEI files, but now we can specify how many speech acts are executed by each character, how many words are uttered by each of them, and the amount of letters used by everybody. These values were elevated from all dramas of our [Sydney corpus](/Introducing-DLINA-Corpus-15-07-Codename-Sydney/), i.e., 465 dramas written or published inbetween 1731 and 1929.

The complete list of all 9,913 characters contained in our corpus can be found [here](https://github.com/dlina/project/blob/master/data/zwischenformat/output/amount-list.csv) (i.e., the average cast list of a play has 21 characters).

But today we're not interested in the list as a whole (we'll get back to that later), but the top 20. Meet the 20 biggester chatterboxes of German literature (omitting the ones who are not in our corpus, of course):

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

The appearance of Arno Holz and his play *Ignorabimus* seems natural, given that it's the longest play in our corpus (cf. (the corresponding blog entry](/Longest-German-Language-Theatre-Plays/)).

But let's have a closer look at the first four lines regardiong only two dramas, Arno Holz's *Ignorabimus* and Goethe's *Faust, part I*. Their values document quite some structural differences between the two texts, or rather, they indicate a completely different way of speaking:

| 1   | GEORG          | Ignorabimus                          | Holz, Arno                  | 133443 | 20859 | 952         | [http://dlina.github.io/390/](http://dlina.github.io/390/) |
| 2   | DUFROY         | Ignorabimus                          | Holz, Arno                  | 107534 | 16588 | 885         | [http://dlina.github.io/390/](http://dlina.github.io/390/) |
| 3   | FAUST          | Faust. Der Tragödie erster Teil      | Goethe, Johann Wolfgang     | 97546  | 9037  | 225         | [http://dlina.github.io/243/](http://dlina.github.io/243/) |
| 4   | MEPHISTOPHELES | Faust. Der Tragödie erster Teil      | Goethe, Johann Wolfgang     | 92536  | 8408  | 257         | [http://dlina.github.io/243/](http://dlina.github.io/243/) |

Simply put: In Arno Holz's play, characters speak much more often, but their utterances are quite short and so are the words they use. In Goethe's play, the characters speak less often, but their speeches are much longer, as are the words they use.

In any case, this difference can be explained with the whole different eras that spawned the two plays, the temporal distance amounts to more than a century. Perhaps we're witnessing the difference of two two historical styles here: Isn't this difference all about pre-modern vs. modern drama?
We will discuss this further, of course, since this is the kind of quantitative evidence we are looking for when researching structural styles of dramatic texts.

Well, let's leave the stage to the poets for now. We'll have some text by our winner at first, Arno Holz, followed by some infamous Goethe lines:

### 1124 characters from *Ignorabimus* (1914)

    GEORG
    *in diesem Augenblick durch die Tür links; schlanke, nervöse Erscheinung; in ihrer ganzen Haltung den ehemaligen Offizier noch verratend; das dunkle Haar an den Schläfen bereits stark ergraut; Schnurrbart noch dunkel, die Augen hellgrau und durchdringend.*
    Guten Morgen!
    MARIANNE
    *herzklopfend aufgestanden; ihn groß anstarrend; sie hat unwillkürlich versucht, die Blumen etwas zu verbergen.*
    ...
    GEORG
    *unruhig, dabei eine Zigarette rauchend, auf und ab; seine Sprechweise ist hastig knapp.*
    Du brauchst die Dinger nicht zu verstecken! ... Laßt euch nicht stören!
    ONKEL LUDWIG
    *die Blumen ergreifend und sie vor sich hinlegend; ruhig.*
    Gib sie mir, Kind. Ich werde sie mir oben auf meine stille Stube stellen.
    MARIANNE
    *die sich erst jetzt etwas gefaßt hat; stockend; zu Georg.*
    Hat dir der Diener ... deinen Tee schon gebracht?
    GEORG
    *durch dessen Ton fast permanent etwas wie Unruhe, federnde Unzufriedenheit oder Gereiztheit klingt.*
    Danke. Ich rauche! ... Hatte nur so aus Gewohnheit geschellt. Reflexbewegung! Kann ihn wieder wegtragen. Pferdegetrappel.
    ONKEL LUDWIG
    *ablenkend; nach dem Garten hin.*
    Eine Hitze draußen ...
    GEORG
    *kurz; sachlich.*
    Ja.

### 4565 characters from *Faust. Der Tragödie erster Teil* (1808)

    FAUST.
    Habe nun, ach! Philosophie,
    Juristerei und Medizin,
    Und leider auch Theologie
    Durchaus studiert, mit heißem Bemühn.
    Da steh' ich nun, ich armer Tor,
    Und bin so klug als wie zuvor!
    Heiße Magister, heiße Doktor gar,
    Und ziehe schon an die zehen Jahr'
    Herauf, herab und quer und krumm
    Meine Schüler an der Nase herum –
    Und sehe, daß wir nichts wissen können!
    Das will mir schier das Herz verbrennen.
    Zwar bin ich gescheiter als alle die Laffen,
    Doktoren, Magister, Schreiber und Pfaffen;
    Mich plagen keine Skrupel noch Zweifel,
    Fürchte mich weder vor Hölle noch Teufel –
    Dafür ist mir auch alle Freud' entrissen,
    Bilde mir nicht ein, was Rechts zu wissen,
    Bilde mir nicht ein, ich könnte was lehren,
    Die Menschen zu bessern und zu bekehren.
    Auch hab' ich weder Gut noch Geld,
    Noch Ehr' und Herrlichkeit der Welt;
    Es möchte kein Hund so länger leben!
    Drum hab' ich mich der Magie ergeben,
    Ob mir durch Geistes Kraft und Mund
    Nicht manch Geheimnis würde kund;
    Daß ich nicht mehr mit sauerm Schweiß
    Zu sagen brauche, was ich nicht weiß;
    Daß ich erkenne, was die Welt
    Im Innersten zusammenhält,
    Schau' alle Wirkenskraft und Samen,
    Und tu' nicht mehr in Worten kramen.

    O sähst du, voller Mondenschein,
    Zum letztenmal auf meine Pein,
    Den ich so manche Mitternacht
    An diesem Pult herangewacht:
    Dann über Büchern und Papier,
    Trübsel'ger Freund, erschienst du mir!
    Ach! könnt' ich doch auf Bergeshöhn
    In deinem lieben Lichte gehn,
    Um Bergeshöhle mit Geistern schweben,
    Auf Wiesen in deinem Dämmer weben,
    Von allem Wissensqualm entladen,
    In deinem Tau gesund mich baden!

    Weh! steck' ich in dem Kerker noch?
    Verfluchtes dumpfes Mauerloch,
    Wo selbst das liebe Himmelslicht
    Trüb durch gemalte Scheiben bricht!
    Beschränkt von diesem Bücherhauf,
    Den Würme nagen, Staub bedeckt,
    Den, bis ans hohe Gewölb' hinauf,
    Ein angeraucht Papier umsteckt;
    Mit Gläsern, Büchsen rings umstellt,
    Mit Instrumenten vollgepfropft,
    Urväter-Hausrat drein gestopft –
    Das ist deine Welt! das heißt eine Welt!

    Und fragst du noch, warum dein Herz
    Sich bang in deinem Busen klemmt?
    Warum ein unerklärter Schmerz
    Dir alle Lebensregung hemmt?
    Statt der lebendigen Natur,
    Da Gott die Menschen schuf hinein,
    Umgibt in Rauch und Moder nur
    Dich Tiergeripp' und Totenbein.

    Flieh! auf! hinaus ins weite Land!
    Und dies geheimnisvolle Buch,
    Von Nostradamus' eigner Hand,
    Ist dir es nicht Geleit genug?
    Erkennest dann der Sterne Lauf,
    Und wenn Natur dich unterweist,
    Dann geht die Seelenkraft dir auf,
    Wie spricht ein Geist zum andern Geist.
    Umsonst, daß trocknes Sinnen hier
    Die heil'gen Zeichen dir erklärt:
    Ihr schwebt, ihr Geister, neben mir;
    Antwortet mir, wenn ihr mich hört!

	*Er schlägt das Buch auf und erblickt das Zeichen des Makrokosmus.*

    Ha! welche Wonne fließt in diesem Blick
    Auf einmal mir durch alle meine Sinnen!
    Ich fühle junges, heil'ges Lebensglück
    Neuglühend mir durch Nerv' und Adern rinnen.
    War es ein Gott, der diese Zeichen schrieb,
    Die mir das innre Toben stillen,
    Das arme Herz mit Freude füllen
    Und mit geheimnisvollem Trieb
    Die Kräfte der Natur rings um mich her enthüllen?
    Bin ich ein Gott? Mir wird so licht!
    Ich schau' in diesen reinen Zügen
    Die wirkende Natur vor meiner Seele liegen.
    Jetzt erst erkenn' ich, was der Weise spricht:
    ›Die Geisterwelt ist nicht verschlossen;
    Dein Sinn ist zu, dein Herz ist tot!
    Auf, bade, Schüler, unverdrossen
    Die ird'sche Brust im Morgenrot!‹

    *Er beschaut das Zeichen.*

    Wie alles sich zum Ganzen webt,
    Eins in dem andern wirkt und lebt!
    Wie Himmelskräfte auf und nieder steigen
    Und sich die goldnen Eimer reichen!
    Mit segenduftenden Schwingen
    Vom Himmel durch die Erde dringen,
    Harmonisch all das All durchklingen!

    Welch Schauspiel! Aber ach! ein Schauspiel nur!
    Wo fass' ich dich, unendliche Natur?
    Euch Brüste, wo? Ihr Quellen alles Lebens,
    An denen Himmel und Erde hängt,
    Dahin die welke Brust sich drängt –
    Ihr quellt, ihr tränkt, und schmacht' ich so vergebens?

    *Er schlägt unwillig das Buch um und erblickt das Zeichen des Erdgeistes.*

    Wie anders wirkt dies Zeichen auf mich ein!
    Du, Geist der Erde, bist mir näher;
    Schon fühl' ich meine Kräfte höher,
    Schon glüh' ich wie von neuem Wein,
    Ich fühle Mut, mich in die Welt zu wagen,
    Der Erde Weh, der Erde Glück zu tragen,
    Mit Stürmen mich herumzuschlagen
    Und in des Schiffbruchs Knirschen nicht zu zagen.
    Es wölkt sich über mir –
    Der Mond verbirgt sein Licht –
    Die Lampe schwindet!
    Es dampft – Es zucken rote Strahlen
    Mir um das Haupt – Es weht
    Ein Schauer vom Gewölb' herab
    Und faßt mich an!
    Ich fühl's, du schwebst um mich, erflehter Geist.
    Enthülle dich!
    Ha! wie's in meinem Herzen reißt!
    Zu neuen Gefühlen
    All' meine Sinnen sich erwühlen!
    Ich fühle ganz mein Herz dir hingegeben!
    Du mußt! du mußt! und kostet' es mein Leben!

