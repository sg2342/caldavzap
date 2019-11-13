function CalDAVcleanupRegexEnvironment(e){if(void 0!==e)for(var a in vCalendar.tplM)0==a.indexOf("VT")&&void 0!==vCalendar.tplM[a][e]&&delete vCalendar.tplM[a][e];else for(var a in vCalendar.tplM)"unprocessed"==a||"unprocessedVTIMEZONE"==a?vCalendar.tplM[a]="":0!=a.indexOf("VT")&&(vCalendar.tplM[a]=new Array)}var vCalendar=new Object;vCalendar.tplC=new Object,vCalendar.tplM=new Object,vCalendar.re=new Object,vCalendar.pre=new Object,vCalendar.re.ALPHA="[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮٱ-ۓەۥۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߺऄ-हऽॐक़-ॡॱॻ-ॿঅ-ঌএও-নপ-রলশ-হঽৎড়য়-ৡৰਅ-ਊਏਓ-ਨਪ-ਰਲਵ-ਸ਼ਸਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલવ-હઽૐૠଅ-ଌଏଓ-ନପ-ରଲଵ-ହଽଡ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙஜஞ-டணந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠഅ-ഌഎ-ഐഒ-നപ-ഹഽൠൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาเ-ๆກຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສອ-ະາຽເ-ໄໆໜༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀䶵一鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜְͅ-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٗٙ-ٰٞۖ-ۜۡ-ۤۧ-ܑۭۨܰ-ܿަ-ްँ-ंःा-ीु-ैॉ-ौॢ-ॣঁং-ঃা-ীু-ৄে-ৈো-ৌৗৢ-ৣਁ-ਂਃਾ-ੀੁ-ੂੇ-ੈੋ-ੌੑੰ-ੱੵઁ-ંઃા-ીુ-ૅે-ૈૉો-ૌૢ-ૣଁଂ-ଃାିୀୁ-ୄେ-ୈୋ-ୌୖୗୢ-ୣஂா-ிீு-ூெ-ைொ-ௌௗఁ-ఃా-ీు-ౄె-ైొ-ౌౕ-ౖౢ-ౣಂ-ಃಾಿೀ-ೄೆೇ-ೈೊ-ೋೌೕ-ೖೢ-ೣം-ഃാ-ീു-ൄെ-ൈൊ-ൌൗൢ-ൣං-ඃා-ෑි-ුූෘ-ෟෲ-ෳัิ-ฺํັິ-ູົ-ຼໍཱ-ཾཿྀ-ཱྀྐ-ྗྙ-ྼါ-ာိ-ူေဲ-ံးျ-ြွ-ှၖ-ၗၘ-ၙၞ-ၠၢၧ-ၨၱ-ၴႂႃ-ႄႅ-ႆ፟ᜒ-ᜓᜲ-ᜳᝒ-ᝓᝲ-ᝳាិ-ួើ-ៅំះ-ៈᢩᤠ-ᤢᤣ-ᤦᤧ-ᤨᤩ-ᤫᤰ-ᤱᤲᤳ-ᤸᦰ-ᧀᧈ-ᧉᨗ-ᨘᨙ-ᨛᬀ-ᬃᬄᬵᬶ-ᬺᬻᬼᬽ-ᭁᭂᭃᮀ-ᮁᮂᮡᮢ-ᮥᮦ-ᮧᮨ-ᮩᰤ-ᰫᰬ-ᰳᰴ-ᰵⒶ-ⓩⷠ-ⷿꠣ-ꠤꠥ-ꠦꠧꢀ-ꢁꢴ-ꣃꤦ-ꤪꥇ-ꥑꥒꨩ-ꨮꨯ-ꨰꨱ-ꨲꨳ-ꨴꨵ-ꨶꩃꩌꩍﬞ]",vCalendar.re.CR="\r",vCalendar.re.LF="\n",vCalendar.re.CRLF="(?:"+vCalendar.re.CR+vCalendar.re.LF+")",vCalendar.re.DIGIT="[0-9]",vCalendar.re.DQUOTE='"',vCalendar.re.HTAB="\t",vCalendar.re.SP=" ",vCalendar.re.WSP="(?:"+vCalendar.re.SP+"|"+vCalendar.re.HTAB+")",vCalendar.re.ALPHANUM="(?:"+vCalendar.re.ALPHA+"|"+vCalendar.re.DIGIT+")",vCalendar.re.regular="(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)",vCalendar.re.irregular="(?:en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)",vCalendar.re.grandfathered="(?:"+vCalendar.re.irregular+"|"+vCalendar.re.regular+")",vCalendar.re.privateuse="(?:x(-("+vCalendar.re.ALPHANUM+"){3}){1,3})",vCalendar.re.singleton="(?:"+vCalendar.re.DIGIT+"|[A-WY-Za-wy-z])",vCalendar.re.extension="(?:"+vCalendar.re.singleton+"(-"+vCalendar.re.ALPHANUM+"{2,8}){1,})",vCalendar.re.variant="(?:"+vCalendar.re.ALPHANUM+"{5,8}|("+vCalendar.re.DIGIT+vCalendar.re.ALPHANUM+"{3}))",vCalendar.re.region="(?:"+vCalendar.re.ALPHA+"{2}|"+vCalendar.re.DIGIT+"{3})",vCalendar.re.script="(?:"+vCalendar.re.ALPHA+"{4})",vCalendar.re.extlang="(?:"+vCalendar.re.ALPHA+"{3}(-"+vCalendar.re.ALPHA+"{3}){0,2})",vCalendar.re.language="(?:("+vCalendar.re.ALPHA+"{2,3}(-"+vCalendar.re.extlang+")?)|"+vCalendar.re.ALPHA+"{4}|"+vCalendar.re.ALPHA+"{5,8})",vCalendar.re.langtag="(?:"+vCalendar.re.language+"(-"+vCalendar.re.script+")?(-"+vCalendar.re.region+")?(-"+vCalendar.re.variant+")*(-"+vCalendar.re.extension+")*(-"+vCalendar.re.privateuse+")?)",vCalendar.re["Language-Tag"]="(?:"+vCalendar.re.langtag+"|"+vCalendar.re.privateuse+"|"+vCalendar.re.grandfathered+")",vCalendar.re["NON-ASCII"]="[-￿]",vCalendar.re["QSAFE-CHAR"]="(?:"+vCalendar.re.WSP+"|[!#-~]|"+vCalendar.re["NON-ASCII"]+")",vCalendar.re["SAFE-CHAR"]="(?:"+vCalendar.re.WSP+"|[!#-+--9<-~]|"+vCalendar.re["NON-ASCII"]+"|-)",vCalendar.re["VALUE-CHAR"]=".",vCalendar.re["ESCAPED-CHAR"]="(?:(?:\\\\)|(?:\\\\;)|(?:;)|(?:\\\\,)|(?:\\\\[nN]))",vCalendar.re.group="(?:"+vCalendar.re.ALPHA+"|"+vCalendar.re.DIGIT+"|-)+",vCalendar.re["iana-token"]="(?:"+vCalendar.re.ALPHA+"|"+vCalendar.re.DIGIT+"|-)+",vCalendar.re["x-name"]="X-(?:"+vCalendar.re.ALPHA+"|"+vCalendar.re.DIGIT+"|-)+",vCalendar.re.name="(?:"+vCalendar.re["iana-token"]+"|"+vCalendar.re["x-name"]+")",vCalendar.re.ptext="(?:"+vCalendar.re["SAFE-CHAR"]+")*",vCalendar.re["quoted-string"]="(?:"+vCalendar.re.DQUOTE+vCalendar.re["QSAFE-CHAR"]+"*"+vCalendar.re.DQUOTE+")",vCalendar.re["param-value"]="(?:"+vCalendar.re.ptext+"|"+vCalendar.re["quoted-string"]+")",vCalendar.re["param-name"]="(?:"+vCalendar.re["iana-token"]+"|"+vCalendar.re["x-name"]+")",vCalendar.re.param="(?:"+vCalendar.re["param-name"]+"="+vCalendar.re["param-value"]+"(?:,"+vCalendar.re["param-value"]+")*)",vCalendar.re.value="(?:"+vCalendar.re["VALUE-CHAR"]+")*","undefined"==typeof globalLazyMatching||0!=globalLazyMatching?vCalendar.re.contentline=".+"+vCalendar.re.CRLF:vCalendar.re.contentline="(?:"+vCalendar.re.group+"\\.)?"+vCalendar.re.name+"(?:;"+vCalendar.re.param+")*:.*"+vCalendar.re.CRLF,vCalendar.re.contentline_parse="((?:"+vCalendar.re.group+"\\.)?)("+vCalendar.re.name+")((?:;"+vCalendar.re.param+")*):(.*)"+vCalendar.re.CRLF,vCalendar.pre.contentline_parse=RegExp("\r\n"+vCalendar.re.contentline_parse,"mi"),vCalendar.re.vcalendar="(?:(?:"+vCalendar.re.group+"\\.)?BEGIN:VCALENDAR"+vCalendar.re.CRLF+"(?:"+vCalendar.re.contentline+")+(?:"+vCalendar.re.group+"\\.)?END:VCALENDAR"+vCalendar.re.CRLF+")",vCalendar.pre.vcalendar=RegExp(vCalendar.re.vcalendar),vCalendar.re.vtodo="(?:(?:"+vCalendar.re.group+"\\.)?BEGIN:VTODO"+vCalendar.re.CRLF+"(?:"+vCalendar.re.contentline+")+(?:"+vCalendar.re.group+"\\.)?END:VTODO"+vCalendar.re.CRLF+")",vCalendar.pre.vtodo=RegExp(vCalendar.re.vtodo),vCalendar.re.vevent="(?:(?:"+vCalendar.re.group+"\\.)?BEGIN:VEVENT"+vCalendar.re.CRLF+"(?:"+vCalendar.re.contentline+")+(?:"+vCalendar.re.group+"\\.)?END:VEVENT"+vCalendar.re.CRLF+")",vCalendar.pre.vevent=RegExp(vCalendar.re.vevent),vCalendar.re.valarm="(?:(?:"+vCalendar.re.group+"\\.)?BEGIN:VALARM"+vCalendar.re.CRLF+"(?:"+vCalendar.re.contentline+")+(?:"+vCalendar.re.group+"\\.)?END:VALARM"+vCalendar.re.CRLF+")",vCalendar.pre.valarm=RegExp(""+vCalendar.re.valarm),vCalendar.re.valarm2="(?:(?:"+vCalendar.re.group+"\\.)?BEGIN:VALARM"+vCalendar.re.CRLF+"(?:"+vCalendar.re.contentline+")+(?:"+vCalendar.re.group+"\\.)?END:VALARM)",vCalendar.pre.valarm2=RegExp(vCalendar.re.valarm2),vCalendar.re.tzone="(?:(?:"+vCalendar.re.group+"\\.)?BEGIN:VTIMEZONE"+vCalendar.re.CRLF+"(?:"+vCalendar.re.contentline+")+(?:"+vCalendar.re.group+"\\.)?END:VTIMEZONE"+vCalendar.re.CRLF+")",vCalendar.pre.tzone=RegExp(vCalendar.re.tzone),vCalendar.re["vcalendar-entity"]="(?:"+vCalendar.re.vcalendar+")+",vCalendar.re["text-param"]="(?:VALUE=ptext|LANGUAGE="+vCalendar.re["Language-Tag"]+"|"+vCalendar.re["x-name"]+"="+vCalendar.re["param-value"]+")",vCalendar.re["text-value"]="(?:"+vCalendar.re["SAFE-CHAR"]+'|[:"]|'+vCalendar.re["ESCAPED-CHAR"]+")*",vCalendar.re["text-value-list"]=vCalendar.re["text-value"]+"(?:,"+vCalendar.re["text-value"]+")*",vCalendar.re["date-value"]="[0-2][0-9]{3}?(?:0[1-9]|1[012])?(?:0[1-9]|[12][0-9]|3[01])",vCalendar.re["date-time-value"]=vCalendar.re["date-value"]+"T(?:[01][0-9]|2[0-3]):?(?:[0-5][0-9])(?::?(?:[0-5][0-9]))?(?:Z?|[+-](?:[01][0-9]|2[0-3])(?::?(?:[0-5][0-9]))?)",vCalendar.pre["date-time-value"]=RegExp(vCalendar.re["date-time-value"],"mi"),vCalendar.re["utc-offset-value"]="[+-]?(?:[01][0-9]|2[0-3]):[0-5][0-9]",vCalendar.re["float-value"]="[+-]?[0-9]+\\.[0-9]+",vCalendar.re.xparam=vCalendar.re["x-name"]+"="+vCalendar.re["param-value"]+"(?:,"+vCalendar.re["param-value"]+")*",vCalendar.re.freq="(?:SECONDLY|MINUTELY|HOURLY|DAILY|WEEKLY|MONTHLY|YEARLY)",vCalendar.re.seconds_minutes="[1-5]?[0-9]",vCalendar.re.byhrlist="(?:1?[0-9]|2[0-3])",vCalendar.re.byseclist_byminlist=vCalendar.re.seconds_minutes+"(?:,"+vCalendar.re.seconds_minutes+")*",vCalendar.re.ordwk="(?:[1-9]|[1-4][0-9]|5[0-3])?",vCalendar.re.weekday="(?:SU|MO|TU|WE|TH|FR|SA)",vCalendar.re.weekdaynum="[+-]?"+vCalendar.re.ordwk+vCalendar.re.weekday,vCalendar.re.bywdaylist=vCalendar.re.weekdaynum+"(?:,"+vCalendar.re.weekdaynum+")*",vCalendar.re.ordmoday="(?:[1-9]|[1-2][0-9]|3[0-1])",vCalendar.re.monthdaynum="[+-]?"+vCalendar.re.ordmoday,vCalendar.re.bymodaylist=vCalendar.re.monthdaynum+"(?:,"+vCalendar.re.monthdaynum+")*",vCalendar.re.ordyrday="(?:[1-9]|[1-2]?[1-9][0-9]|3[0-5][0-9]|36[0-6])",vCalendar.re.yeardaynum="[+-]?"+vCalendar.re.ordyrday,vCalendar.re.byyrdaylist=vCalendar.re.yeardaynum+"(?:,"+vCalendar.re.yeardaynum+")*",vCalendar.re.weeknum="[+-]?"+vCalendar.re.ordwk,vCalendar.re.bywknolist=vCalendar.re.weeknum+"(?:,"+vCalendar.re.weeknum+")*",vCalendar.re.monthnum="(?:[1-9]|1[0-2])",vCalendar.re.bymolist=vCalendar.re.monthnum+"(?:,"+vCalendar.re.monthnum+")*",vCalendar.re.bysplist=vCalendar.re.yeardaynum+"(?:,"+vCalendar.re.yeardaynum+")*",vCalendar.re.dtstval="(?:"+vCalendar.re["date-value"]+"|"+vCalendar.re["date-time-value"]+")",vCalendar.re.recur="(?:FREQ="+vCalendar.re.freq+"|;UNTIL="+vCalendar.re.dtstval+"|;COUNT="+vCalendar.re.DIGIT+"+|;INTERVAL="+vCalendar.re.DIGIT+"+|;BYSECOND="+vCalendar.re.byseclist_byminlist+"|;BYMINUTE="+vCalendar.re.byseclist_byminlist+"|;BYHOUR="+vCalendar.re.byhrlist+"|;BYDAY="+vCalendar.re.bywdaylist+"|;BYMONTHDAY="+vCalendar.re.bymodaylist+"|;BYYEARDAY="+vCalendar.re.byyrdaylist+"|;BYWEEKNO="+vCalendar.re.bywknolist+"|;BYMONTH="+vCalendar.re.bymolist+"|;BYSETPOS="+vCalendar.re.bysplist+"|;WKST="+vCalendar.re.weekday+"|;"+vCalendar.re["x-name"]+"="+vCalendar.re["text-value"]+")*",vCalendar.re.recurCaldav="^(?:FREQ="+vCalendar.re.freq+"|;UNTIL="+vCalendar.re.dtstval+"|;COUNT="+vCalendar.re.DIGIT+"+|;INTERVAL="+vCalendar.re.DIGIT+"+|;BYDAY="+vCalendar.re.bywdaylist+"|;BYMONTHDAY="+vCalendar.re.bymodaylist+"|;BYMONTH="+vCalendar.re.bymolist+"|;WKST="+vCalendar.re.weekday+")*$",vCalendar.re.contentline_SUMMARY="(?:"+vCalendar.re.group+"\\.)?SUMMARY(?:;"+vCalendar.re["text-param"]+")*:"+vCalendar.re["text-value"]+vCalendar.re.CRLF,vCalendar.pre.contentline_SUMMARY=RegExp("\r\n"+vCalendar.re.contentline_SUMMARY,"mi"),vCalendar.re.tzidparam="TZID=/?"+vCalendar.re["param-value"],vCalendar.re.dtstparam="(?:VALUE=(?:date|date-time)|"+vCalendar.re.tzidparam+"|"+vCalendar.re.xparam+")",vCalendar.re.contentline_DTSTART="(?:"+vCalendar.re.group+"\\.)?DTSTART(?:;"+vCalendar.re.dtstparam+")*:"+vCalendar.re.dtstval+vCalendar.re.CRLF,vCalendar.pre.contentline_DTSTART=RegExp("\r\n"+vCalendar.re.contentline_DTSTART,"mi"),vCalendar.re.contentline_LM="(?:"+vCalendar.re.group+"\\.)?LAST-MODIFIED:"+vCalendar.re.dtstval+vCalendar.re.CRLF,vCalendar.pre.contentline_LM=RegExp("\r\n"+vCalendar.re.contentline_LM,"mi"),vCalendar.re.contentline_CREATED="(?:"+vCalendar.re.group+"\\.)?CREATED:"+vCalendar.re["date-time-value"]+vCalendar.re.CRLF,vCalendar.pre.contentline_CREATED=RegExp("\r\n"+vCalendar.re.contentline_CREATED,"mi"),vCalendar.re.contentline_DTSTAMP="(?:"+vCalendar.re.group+"\\.)?DTSTAMP:"+vCalendar.re.dtstval+vCalendar.re.CRLF,vCalendar.pre.contentline_DTSTAMP=RegExp("\r\n"+vCalendar.re.contentline_DTSTAMP,"mi"),vCalendar.re.contentline_DTEND="(?:"+vCalendar.re.group+"\\.)?DTEND(?:;"+vCalendar.re.dtstparam+")*:"+vCalendar.re.dtstval+vCalendar.re.CRLF,vCalendar.pre.contentline_DTEND=RegExp("\r\n"+vCalendar.re.contentline_DTEND,"mi"),vCalendar.re.contentline_DUE="(?:"+vCalendar.re.group+"\\.)?DUE(?:;"+vCalendar.re.dtstparam+")*:"+vCalendar.re.dtstval+vCalendar.re.CRLF,vCalendar.pre.contentline_DUE=RegExp("\r\n"+vCalendar.re.contentline_DUE,"mi"),vCalendar.re.contentline_TZID="(?:"+vCalendar.re.group+"\\.)?TZID(?:;"+vCalendar.re["text-param"]+")*:"+vCalendar.re["text-value"]+vCalendar.re.CRLF,vCalendar.pre.contentline_TZID=RegExp("\r\n"+vCalendar.re.contentline_TZID,"mi"),vCalendar.re.contentline_RRULE="(?:"+vCalendar.re.group+"\\.)?RRULE(?:"+vCalendar.re["text-param"]+")*:.*"+vCalendar.re.CRLF,vCalendar.pre.contentline_RRULE=RegExp("\r\n"+vCalendar.re.contentline_RRULE,"mig"),vCalendar.re.contentline_RRULE2="(?:"+vCalendar.re.group+"\\.)?RRULE(?:;"+vCalendar.re.xparam+")*:"+vCalendar.re.recur+vCalendar.re.CRLF,vCalendar.pre.contentline_RRULE2=RegExp("\r\n"+vCalendar.re.contentline_RRULE2,"mi"),vCalendar.re.contentline_RECURRENCE_ID="(?:"+vCalendar.re.group+"\\.)?RECURRENCE-ID(?:;"+vCalendar.re.dtstparam+")*:"+vCalendar.re.dtstval+vCalendar.re.CRLF,vCalendar.pre.contentline_RECURRENCE_ID=RegExp("\r\n"+vCalendar.re.contentline_RECURRENCE_ID,"mi"),vCalendar.pre.contentline_RECURRENCE_IDg=RegExp("\r\n"+vCalendar.re.contentline_RECURRENCE_ID,"mig"),vCalendar.re.contentline_EXDATE="(?:"+vCalendar.re.group+"\\.)?EXDATE(?:;"+vCalendar.re.dtstparam+")*:"+vCalendar.re.dtstval+vCalendar.re.CRLF,vCalendar.pre.contentline_EXDATE=RegExp("\r\n"+vCalendar.re.contentline_EXDATE,"mi"),vCalendar.re.beginVEVENT="BEGIN:VEVENT\r\n",vCalendar.pre.beginVEVENT=RegExp("\r\n"+vCalendar.re.beginVEVENT,"mi"),vCalendar.re.endVEVENT="END:VEVENT\r\n",vCalendar.pre.endVEVENT=RegExp("\r\n"+vCalendar.re.endVEVENT,"mi"),vCalendar.re.beginVALARM="BEGIN:VALARM\r\n",vCalendar.pre.beginVALARM=RegExp("\r\n"+vCalendar.re.beginVALARM,"mig"),vCalendar.re.endVALARM="END:VALARM\r\n",vCalendar.pre.endVALARM=RegExp("\r\n"+vCalendar.re.endVALARM,"mi"),vCalendar.re.beginVTODO="BEGIN:VTODO\r\n",vCalendar.pre.beginVTODO=RegExp("\r\n"+vCalendar.re.beginVTODO,"mi"),vCalendar.re.endVTODO="END:VTODO\r\n",vCalendar.pre.endVTODO=RegExp("\r\n"+vCalendar.re.endVTODO,"mi"),vCalendar.re.contentline_ACTION="(?:"+vCalendar.re.group+"\\.)?ACTION(?:;"+vCalendar.re["text-param"]+")*:"+vCalendar.re["text-value"]+vCalendar.re.CRLF,vCalendar.pre.contentline_ACTION=RegExp("\r\n"+vCalendar.re.contentline_ACTION,"mig"),vCalendar.re["dur-day"]=vCalendar.re.DIGIT+"+D",vCalendar.re["dur-second"]=vCalendar.re.DIGIT+"+S",vCalendar.re["dur-minute"]=vCalendar.re.DIGIT+"+M(?:"+vCalendar.re["dur-second"]+")?",vCalendar.re["dur-hour"]=vCalendar.re.DIGIT+"+H(?:"+vCalendar.re["dur-minute"]+")?",vCalendar.re["dur-week"]=vCalendar.re.DIGIT+"+W",vCalendar.re["dur-time"]="T?(?:"+vCalendar.re["dur-hour"]+"|"+vCalendar.re["dur-minute"]+"|"+vCalendar.re["dur-second"]+")",vCalendar.re["dur-date"]=vCalendar.re["dur-day"]+"(?:"+vCalendar.re["dur-time"]+")?",vCalendar.re["dur-value"]="[+-]?P(?:"+vCalendar.re["dur-date"]+"|"+vCalendar.re["dur-time"]+"|"+vCalendar.re["dur-week"]+")",vCalendar.pre["dur-value"]=RegExp("\r\nDURATION:"+vCalendar.re["dur-value"],"mi"),vCalendar.re.trigrel="(?:;VALUE=DURATION|;RELATED=(?:START|END)|;"+vCalendar.re.xparam+")*:"+vCalendar.re["dur-value"],vCalendar.re.trigabs="(?:;VALUE=DATE-TIME|;"+vCalendar.re.xparam+")+:"+vCalendar.re["date-time-value"],vCalendar.re.contentline_TRIGGER="(?:"+vCalendar.re.group+"\\.)?TRIGGER(?:"+vCalendar.re.trigrel+"|"+vCalendar.re.trigabs+")",vCalendar.pre.contentline_TRIGGER=RegExp("\r\n"+vCalendar.re.contentline_TRIGGER,"mi"),vCalendar.re.contentline_NOTE="(?:"+vCalendar.re.group+"\\.)?DESCRIPTION(?:;"+vCalendar.re["text-param"]+")*:"+vCalendar.re["text-value"]+vCalendar.re.CRLF,vCalendar.pre.contentline_NOTE=RegExp("\r\n"+vCalendar.re.contentline_NOTE,"mig"),vCalendar.pre.contentline_NOTE2=RegExp("\r\n"+vCalendar.re.contentline_NOTE,"mi"),vCalendar.re.contentline_LOCATION="(?:"+vCalendar.re.group+"\\.)?LOCATION(?:;"+vCalendar.re["text-param"]+")*:"+vCalendar.re["text-value"]+vCalendar.re.CRLF,vCalendar.pre.contentline_LOCATION=RegExp("\r\n"+vCalendar.re.contentline_LOCATION,"mi"),vCalendar.re.contentline_PRODID="(?:"+vCalendar.re.group+"\\.)?PRODID(?:;"+vCalendar.re["text-param"]+")*:"+vCalendar.re["text-value"]+vCalendar.re.CRLF,vCalendar.pre.contentline_PRODID=RegExp("\r\n"+vCalendar.re.contentline_PRODID,"mi"),vCalendar.re.contentline_STATUS="(?:"+vCalendar.re.group+"\\.)?STATUS(?:;"+vCalendar.re["text-param"]+")*:"+vCalendar.re["text-value"]+vCalendar.re.CRLF,vCalendar.pre.contentline_STATUS=RegExp("\r\n"+vCalendar.re.contentline_STATUS,"mi"),vCalendar.re.contentline_COMPLETED="(?:"+vCalendar.re.group+"\\.)?COMPLETED:"+vCalendar.re["date-time-value"]+vCalendar.re.CRLF,vCalendar.pre.contentline_COMPLETED=RegExp("\r\n"+vCalendar.re.contentline_COMPLETED,"mi"),vCalendar.re.contentline_CLASS="(?:"+vCalendar.re.group+"\\.)?CLASS(?:;"+vCalendar.re["text-param"]+")*:(?:PUBLIC|PRIVATE|CONFIDENTIAL)"+vCalendar.re.CRLF,vCalendar.pre.contentline_CLASS=RegExp("\r\n"+vCalendar.re.contentline_CLASS,"mi"),vCalendar.re.contentline_TRANSP="(?:"+vCalendar.re.group+"\\.)?TRANSP(?:;"+vCalendar.re["text-param"]+")*:(?:OPAQUE|TRANSPARENT)"+vCalendar.re.CRLF,vCalendar.pre.contentline_TRANSP=RegExp("\r\n"+vCalendar.re.contentline_TRANSP,"mi"),vCalendar.re["contentline_PERCENT-COMPLETE"]="(?:"+vCalendar.re.group+"\\.)?PERCENT-COMPLETE(?:;"+vCalendar.re["text-param"]+")*:"+vCalendar.re["text-value"]+vCalendar.re.CRLF,vCalendar.pre["contentline_PERCENT-COMPLETE"]=RegExp("\r\n"+vCalendar.re["contentline_PERCENT-COMPLETE"],"mi"),vCalendar.re.contentline_PRIORITY="(?:"+vCalendar.re.group+"\\.)?PRIORITY(?:;"+vCalendar.re["text-param"]+")*:"+vCalendar.re.DIGIT+vCalendar.re.CRLF,vCalendar.pre.contentline_PRIORITY=RegExp("\r\n"+vCalendar.re.contentline_PRIORITY,"mi"),vCalendar.re.contentline_TZOFFSETFROM="(?:"+vCalendar.re.group+"\\.)?TZOFFSETFROM(?:;"+vCalendar.re["text-param"]+")*:"+vCalendar.re["text-value"]+vCalendar.re.CRLF,vCalendar.pre.contentline_TZOFFSETFROM=RegExp("\r\n"+vCalendar.re.contentline_TZOFFSETFROM,"mi"),vCalendar.re.contentline_TZOFFSETTO="(?:"+vCalendar.re.group+"\\.)?TZOFFSETTO(?:;"+vCalendar.re["text-param"]+")*:"+vCalendar.re["text-value"]+vCalendar.re.CRLF,vCalendar.pre.contentline_TZOFFSETTO=RegExp("\r\n"+vCalendar.re.contentline_TZOFFSETTO,"mi"),vCalendar.re.contentline_UID="(?:"+vCalendar.re.group+"\\.)?UID:"+vCalendar.re["text-value"]+vCalendar.re.CRLF,vCalendar.pre.contentline_UID=RegExp("\r\n"+vCalendar.re.contentline_UID,"mi"),vCalendar.re.contentline_URL="(?:"+vCalendar.re.group+"\\.)?URL(?:;"+vCalendar.re.param+")*:"+vCalendar.re["text-value"]+vCalendar.re.CRLF,vCalendar.pre.contentline_URL=RegExp("\r\n"+vCalendar.re.contentline_URL,"mi"),vCalendar.re.contentline_VERSION="(?:"+vCalendar.re.group+"\\.)?VERSION:"+vCalendar.re["text-value"]+vCalendar.re.CRLF,vCalendar.pre.contentline_VERSION=RegExp("\r\n"+vCalendar.re.contentline_VERSION,"mi"),vCalendar.re.contentline_CALSCALE="(?:"+vCalendar.re.group+"\\.)?CALSCALE:"+vCalendar.re["text-value"]+vCalendar.re.CRLF,vCalendar.pre.contentline_CALSCALE=RegExp("\r\n"+vCalendar.re.contentline_CALSCALE,"mi"),vCalendar.pre["+/-number"]=RegExp("[-+]?[0-9]*","mi"),vCalendar.pre.hrefRex=RegExp("^(https?://)(.*)","i"),vCalendar.pre.uidParts=RegExp("^(https?://)([^@/]+(?:@[^@/]+)?)@([^/]+)(.*/)([^/]+/)([^/]*)","i"),vCalendar.pre.accountUidParts=RegExp("^(https?://)([^@/]+(?:@[^@/]+)?)@([^/]+)(.*/)","i"),vCalendar.pre.escapeRex=RegExp("(,|;|\\\\)","g"),vCalendar.pre.escapeRex2=RegExp("\\n","g"),vCalendar.pre.compressNewLineRex=RegExp("(\\r\\n|\\n|\\r)+","gm"),vCalendar.pre.numberPortRex=RegExp(":[0-9]+$"),vCalendar.pre.domainRex=RegExp("^[^.]+\\."),vCalendar.pre.domainNameRex=RegExp("^([^.]+\\.)*?((?:[^.]+\\.)?[^.]+)$"),vCalendar.pre.principalUserNameRex=RegExp("(@.*)?$"),vCalendar.pre.loginRex=RegExp("@.*$"),vCalendar.pre.HRex=RegExp("%H","g"),vCalendar.pre.hRex=RegExp("%h","g"),vCalendar.pre.DRex=RegExp("%D","g"),vCalendar.pre.dRex=RegExp("%d","g"),vCalendar.pre.PRex=RegExp("%P","g"),vCalendar.pre.pRex=RegExp("%p","g"),vCalendar.pre.URex=RegExp("%U","g"),vCalendar.pre.uRex=RegExp("%u","g"),vCalendar.pre.xRex=RegExp("%x","g"),vCalendar.pre.spaceRex=RegExp(" ","g"),vCalendar.pre.hrefValRex=RegExp(".*/",""),vCalendar.tplC.begin="##:::##group_wd##:::##BEGIN:VCALENDAR\r\n",vCalendar.tplM.begin=null,vCalendar.tplC.beginTZONE="##:::##group_wd##:::##BEGIN:VTIMEZONE\r\n",vCalendar.tplM.beginTZONE=null,vCalendar.tplC.beginDAYLIGHT="##:::##group_wd##:::##BEGIN:DAYLIGHT\r\n",vCalendar.tplM.beginDAYLIGHT=null,vCalendar.tplC.beginST="##:::##group_wd##:::##BEGIN:STANDARD\r\n",vCalendar.tplM.beginST=null,vCalendar.tplC.beginVEVENT="##:::##group_wd##:::##BEGIN:VEVENT\r\n",vCalendar.tplM.beginVEVENT=null,vCalendar.tplC.beginVALARM="##:::##group_wd##:::##BEGIN:VALARM\r\n",vCalendar.tplM.beginVALARM=null,vCalendar.tplC.contentline_VERSION="##:::##group_wd##:::##VERSION:##:::##version##:::##\r\n",vCalendar.tplM.contentline_VERSION=null,vCalendar.tplC.contentline_CALSCALE="##:::##group_wd##:::##CALSCALE:##:::##calscale##:::##\r\n",vCalendar.tplM.contentline_CALSCALE=null,vCalendar.tplC.contentline_UID="##:::##group_wd##:::##UID##:::##params_wsc##:::##:##:::##uid##:::##\r\n",vCalendar.tplM.contentline_UID=new Array,vCalendar.tplC.contentline_URL="##:::##group_wd##:::##URL##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_URL=new Array,vCalendar.tplC.contentline_TZID="##:::##group_wd##:::##TZID##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_TZID=new Array,vCalendar.tplC["contentline_X-LIC-LOCATION"]="##:::##group_wd##:::##X-LIC-LOCATION##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM["contentline_X-LIC-LOCATION"]=new Array,vCalendar.tplC.contentline_LOCATION="##:::##group_wd##:::##LOCATION##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_LOCATION=new Array,vCalendar.tplC.contentline_NOTE="##:::##group_wd##:::##DESCRIPTION##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_NOTE=new Array,vCalendar.tplC.contentline_VANOTE="##:::##group_wd##:::##DESCRIPTION##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_VANOTE=null,vCalendar.tplC.contentline_SUMMARY="##:::##group_wd##:::##SUMMARY##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_SUMMARY=new Array,vCalendar.tplC.contentline_RRULE="##:::##group_wd##:::##RRULE##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_RRULE=new Array,vCalendar.tplC.contentline_RRULE2="##:::##group_wd##:::##RRULE##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_RRULE2=new Array,vCalendar.tplC.contentline_RRULE3="##:::##group_wd##:::##RRULE##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_RRULE3=new Array,vCalendar.tplC.contentline_PRODID="##:::##group_wd##:::##PRODID##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_PRODID=new Array,vCalendar.tplC.contentline_TZOFFSETFROM="##:::##group_wd##:::##TZOFFSETFROM##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_TZOFFSETFROM=new Array,vCalendar.tplC.contentline_TZOFFSETTO="##:::##group_wd##:::##TZOFFSETTO##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_TZOFFSETTO=new Array,vCalendar.tplC.contentline_TZNAME="##:::##group_wd##:::##TZNAME##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_TZNAME=new Array,vCalendar.tplC.contentline_TRIGGER="##:::##group_wd##:::##TRIGGER##:::##VALUE=DURATION##:::####:::##VALUE=DATE-TIME##:::####:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_TRIGGER=null,vCalendar.tplC.contentline_REPEAT="##:::##group_wd##:::##REPEAT##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_REPEAT=new Array,vCalendar.tplC.contentline_ACTION="##:::##group_wd##:::##ACTION##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_ACTION=null,vCalendar.tplC.contentline_DURATION="##:::##group_wd##:::##DURATION##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_DURATION=new Array,vCalendar.tplC.contentline_DESCRIPTION="##:::##group_wd##:::##DESCRIPTION##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_DESCRIPTION=new Array,vCalendar.tplC.contentline_CLASS="##:::##group_wd##:::##CLASS##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_CLASS=new Array,vCalendar.tplC.contentline_PRIORITY="##:::##group_wd##:::##PRIORITY##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_PRIORITY=new Array,vCalendar.tplC.contentline_DTSTART="##:::##group_wd##:::##DTSTART##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_DTSTART=new Array,vCalendar.tplC.contentline_CREATED="##:::##group_wd##:::##CREATED##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_CREATED=new Array,vCalendar.tplC.contentline_LM="##:::##group_wd##:::##LAST-MODIFIED##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_LM=new Array,vCalendar.tplC.contentline_DTSTAMP="##:::##group_wd##:::##DTSTAMP##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_DTSTAMP=new Array,vCalendar.tplC.contentline_REC_ID="##:::##group_wd##:::##RECURRENCE-ID##:::##AllDay##:::####:::##TZID##:::####:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_REC_ID=new Array,vCalendar.tplC.contentline_EXDATE="##:::##group_wd##:::##EXDATE##:::##AllDay##:::####:::##TZID##:::####:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_EXDATE=new Array,vCalendar.tplC.contentline_E_DTSTART="##:::##group_wd##:::##DTSTART##:::##AllDay##:::####:::##TZID##:::####:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_E_DTSTART=new Array,vCalendar.tplC.contentline_E_DTEND="##:::##group_wd##:::##DTEND##:::##AllDay##:::####:::##TZID##:::####:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_E_DTEND=new Array,vCalendar.tplC.contentline_TRANSP="##:::##group_wd##:::##TRANSP##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_TRANSP=new Array,vCalendar.tplC.contentline_STATUS="##:::##group_wd##:::##STATUS##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.contentline_STATUS=new Array,vCalendar.tplC.endVALARM="##:::##group_wd##:::##END:VALARM\r\n",vCalendar.tplM.endVALARM=null,vCalendar.tplC.endVEVENT="##:::##group_wd##:::##END:VEVENT\r\n",vCalendar.tplM.endVEVENT=null,vCalendar.tplC.endTZONE="##:::##group_wd##:::##END:VTIMEZONE\r\n",vCalendar.tplM.endTZONE=null,vCalendar.tplC.endST="##:::##group_wd##:::##END:STANDARD\r\n",vCalendar.tplM.endST=null,vCalendar.tplC.endDAYLIGHT="##:::##group_wd##:::##END:DAYLIGHT\r\n",vCalendar.tplM.endDAYLIGHT=null,vCalendar.tplC.end="##:::##group_wd##:::##END:VCALENDAR\r\n",vCalendar.tplM.end=null,vCalendar.tplM.unprocessed="",vCalendar.tplM.unprocessedVTIMEZONE="",vCalendar.tplM.unprocessedVEVENT=new Array,vCalendar.tplM.unprocessedVALARM=new Array,vCalendar.tplC.VTbegin="##:::##group_wd##:::##BEGIN:VCALENDAR\r\n",vCalendar.tplM.VTbegin={},vCalendar.tplC.VTbeginTZONE="##:::##group_wd##:::##BEGIN:VTIMEZONE\r\n",vCalendar.tplM.VTbeginTZONE={},vCalendar.tplC.VTbeginDAYLIGHT="##:::##group_wd##:::##BEGIN:DAYLIGHT\r\n",vCalendar.tplM.VTbeginDAYLIGHT={},vCalendar.tplC.VTbeginST="##:::##group_wd##:::##BEGIN:STANDARD\r\n",vCalendar.tplM.VTbeginST={},vCalendar.tplC.VTbeginVALARM="##:::##group_wd##:::##BEGIN:VALARM\r\n",vCalendar.tplM.VTbeginVALARM={},vCalendar.tplC.VTbeginVTODO="##:::##group_wd##:::##BEGIN:VTODO\r\n",vCalendar.tplM.VTbeginVTODO={},vCalendar.tplC.VTcontentline_VERSION="##:::##group_wd##:::##VERSION:##:::##version##:::##\r\n",vCalendar.tplM.VTcontentline_VERSION={},vCalendar.tplC.VTcontentline_CALSCALE="##:::##group_wd##:::##CALSCALE:##:::##calscale##:::##\r\n",vCalendar.tplM.VTcontentline_CALSCALE={},vCalendar.tplC.VTcontentline_UID="##:::##group_wd##:::##UID##:::##params_wsc##:::##:##:::##uid##:::##\r\n",vCalendar.tplM.VTcontentline_UID={},vCalendar.tplC.VTcontentline_URL="##:::##group_wd##:::##URL##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_URL={},vCalendar.tplC.VTcontentline_LOCATION="##:::##group_wd##:::##LOCATION##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_LOCATION={},vCalendar.tplC.VTcontentline_TZID="##:::##group_wd##:::##TZID##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_TZID={},vCalendar.tplC["VTcontentline_X-LIC-LOCATION"]="##:::##group_wd##:::##X-LIC-LOCATION##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM["VTcontentline_X-LIC-LOCATION"]={},vCalendar.tplC.VTcontentline_LOCATION="##:::##group_wd##:::##LOCATION##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_LOCATION={},vCalendar.tplC.VTcontentline_NOTE="##:::##group_wd##:::##DESCRIPTION##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_NOTE={},vCalendar.tplC.VTcontentline_VANOTE="##:::##group_wd##:::##DESCRIPTION##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_VANOTE={},vCalendar.tplC.VTcontentline_SUMMARY="##:::##group_wd##:::##SUMMARY##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_SUMMARY={},vCalendar.tplC.VTcontentline_RRULE="##:::##group_wd##:::##RRULE##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_RRULE={},vCalendar.tplC.VTcontentline_RRULE2="##:::##group_wd##:::##RRULE##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_RRULE2={},vCalendar.tplC.VTcontentline_REC_ID="##:::##group_wd##:::##RECURRENCE-ID##:::##AllDay##:::####:::##TZID##:::####:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_REC_ID={},vCalendar.tplC.VTcontentline_EXDATE="##:::##group_wd##:::##EXDATE##:::##AllDay##:::####:::##TZID##:::####:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_EXDATE={},vCalendar.tplC.VTcontentline_RRULE3="##:::##group_wd##:::##RRULE##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_RRULE3={},vCalendar.tplC.VTcontentline_PRODID="##:::##group_wd##:::##PRODID##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_PRODID={},vCalendar.tplC.VTcontentline_TZOFFSETFROM="##:::##group_wd##:::##TZOFFSETFROM##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_TZOFFSETFROM={},vCalendar.tplC.VTcontentline_TZOFFSETTO="##:::##group_wd##:::##TZOFFSETTO##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_TZOFFSETTO={},vCalendar.tplC.VTcontentline_TZNAME="##:::##group_wd##:::##TZNAME##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_TZNAME={},vCalendar.tplC.VTcontentline_STATUS="##:::##group_wd##:::##STATUS##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_STATUS={},vCalendar.tplC["VTcontentline_PERCENT-COMPLETE"]="##:::##group_wd##:::##PERCENT-COMPLETE##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM["VTcontentline_PERCENT-COMPLETE"]={},vCalendar.tplC.VTcontentline_PRIORITY="##:::##group_wd##:::##PRIORITY##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_PRIORITY={},vCalendar.tplC.VTcontentline_TRIGGER="##:::##group_wd##:::##TRIGGER##:::##VALUE=DURATION##:::####:::##VALUE=DATE-TIME##:::####:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_TRIGGER={},vCalendar.tplC.VTcontentline_REPEAT="##:::##group_wd##:::##REPEAT##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_REPEAT={},vCalendar.tplC.VTcontentline_ACTION="##:::##group_wd##:::##ACTION##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_ACTION={},vCalendar.tplC.VTcontentline_DURATION="##:::##group_wd##:::##DURATION##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_DURATION={},vCalendar.tplC.VTcontentline_DESCRIPTION="##:::##group_wd##:::##DESCRIPTION##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_DESCRIPTION={},vCalendar.tplC.VTcontentline_CLASS="##:::##group_wd##:::##CLASS##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_CLASS={},vCalendar.tplC.VTcontentline_DTSTART="##:::##group_wd##:::##DTSTART##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_DTSTART={},vCalendar.tplC.VTcontentline_CREATED="##:::##group_wd##:::##CREATED##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_CREATED={},vCalendar.tplC.VTcontentline_COMPLETED="##:::##group_wd##:::##COMPLETED##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_COMPLETED={},vCalendar.tplC.VTcontentline_LM="##:::##group_wd##:::##LAST-MODIFIED##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_LM={},vCalendar.tplC.VTcontentline_DTSTAMP="##:::##group_wd##:::##DTSTAMP##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_DTSTAMP={},vCalendar.tplC.VTcontentline_E_DTSTART="##:::##group_wd##:::##DTSTART##:::##AllDay##:::####:::##TZID##:::####:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_E_DTSTART={},vCalendar.tplC.VTcontentline_DUE="##:::##group_wd##:::##DUE##:::##AllDay##:::####:::##TZID##:::####:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_DUE={},vCalendar.tplC.VTcontentline_TRANSP="##:::##group_wd##:::##TRANSP##:::##params_wsc##:::##:##:::##value##:::##\r\n",vCalendar.tplM.VTcontentline_TRANSP={},vCalendar.tplC.VTendVTODO="##:::##group_wd##:::##END:VTODO\r\n",vCalendar.tplM.VTendVTODO={},vCalendar.tplM.VTalarm_STRING={},vCalendar.tplC.VTendVALARM="##:::##group_wd##:::##END:VALARM\r\n",vCalendar.tplM.VTendVALARM={},vCalendar.tplC.VTendTZONE="##:::##group_wd##:::##END:VTIMEZONE\r\n",vCalendar.tplM.VTendTZONE={},vCalendar.tplC.VTendST="##:::##group_wd##:::##END:STANDARD\r\n",vCalendar.tplM.VTendST={},vCalendar.tplC.VTendDAYLIGHT="##:::##group_wd##:::##END:DAYLIGHT\r\n",vCalendar.tplM.VTendDAYLIGHT={},vCalendar.tplC.VTend="##:::##group_wd##:::##END:VCALENDAR\r\n",vCalendar.tplM.VTend={},vCalendar.tplM.VTunprocessed={},vCalendar.tplM.VTunprocessedVALARM={},vCalendar.tplM.VTunprocessedVTODO={},vCalendar.tplM.VTunprocessedVTIMEZONE={};