"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const B = "https://uploads.weconnect.com/7162831af8ce5410afcaf892908183c8177130bc/";

type Album = {
  id: string;
  title: string;
  subtitle?: string;
  thumbnail: string;
  photos: string[];
};

const albums: Album[] = [
  {
    id: "interior",
    title: "Interior of Church",
    thumbnail: B + "mgcpof4phdfwynlzimimoi3kmns.JPG",
    photos: [
      B + "p7b9mx33ct4hqqei8axcq2bls7s.gif",
      B + "gvlo1umrsickomypniaimlo791s.gif",
      B + "z4r73391w872o0ybowmo6o1hp9s.JPG",
      B + "4qjk3audh7dy2eeuplavphftgxs.JPG",
      B + "s81qn83l2zvfcv7sny37rc29c1s.jpg",
      B + "hjqd9krln3msohwjqd9yb2k4p3s.jpg",
      B + "mgcpof4phdfwynlzimimoi3kmns.JPG",
      B + "z9hf2ogxat97p18q491ezmjj3ss.JPG",
      B + "zdk4yp67nqx8nesngu62b0ne4fs.jpg",
      B + "yf9t923rr0a68o07u1nb9cjssss.jpg",
    ],
  },
  {
    id: "historical",
    title: "Historical Photos",
    thumbnail: B + "bbo9fukyrxnzk3bm799xnszn9fs.jpg",
    photos: [
      B + "bo3xubz58wcw8shlht0w53v77cs.jpg",
      B + "rz1jzlfi0rx47fokzvouygosf0s.jpg",
      B + "jzbjexzlrs514erjl1pynlybzts.jpg",
      B + "5f71lr3r2w1d8aiy3oli8zy94zs.jpg",
      B + "18oqs5w2ekc85mowul0fkb8pt2s.jpg",
      B + "9dhtxe71q9oi8pokvxf25n86ers.jpg",
      B + "3is1mm5s4p2i5as2yujwizxc03s.jpg",
      B + "jhaq1emo1dms1s2khwrf793ufws.jpg",
      B + "v2p1ctys5i6sltp49daxb0i3o5s.jpg",
      B + "tvoiy6p7clf5xy54k2g2m5r8rjs.jpg",
      B + "hlsbz2t9ddrfqlx04bnwre0zgqs.jpg",
      B + "d48db3v57vr3522xwnjx49jcnms.jpg",
      B + "ngahvu6vku2hvr35ls6azjw7yps.jpg",
      B + "q6c2tt0udc3mjoybsultp20mnts.jpg",
      B + "ylyjr6y25isdhc4hz9uu4jdnozs.jpg",
      B + "cqs6uuqc8u6dccbe0ocq2yu92is.jpg",
      B + "8vogfh74mb371gyrzog5tco74ds.jpg",
      B + "3r6skjpdolfkw9l920w8g7mhvps.jpg",
      B + "fwlwl53uka53he7hipt0m1dsr2s.jpg",
      B + "mptad9n58h9br2frgz4rtq2umis.jpg",
      B + "evk5ta7qgrr49ztts5oncsfelrs.jpg",
      B + "kxoiezi5mwvzd6kc10p4n8qn1ns.jpg",
      B + "p8hlls9ncisgs24ex30cxpat92s.jpg",
      B + "ebf23d9zssbh5bsdikecr2bz11s.jpg",
      B + "ajhgzbdtwfijyxw1ch52ww94kfs.jpg",
      B + "uaprqzctagfx3kspmwgxcdmfo2s.jpg",
      B + "jjeoidtptwpzps9f28lotbcrzbs.jpg",
      B + "mi3p0m6kad3dcb7dj6f6j6dd17s.jpg",
      B + "ojn9pbm1coc2s5m2fv75328ulls.jpg",
      B + "vhw51w5uqgbf5c55tveokp60mps.jpg",
      B + "zpnvigyjue5doy0qfaj5i860vss.jpg",
      B + "bwgtl37j7dxn7uh9es3ot146ezs.jpg",
      B + "h7sdwevgm7lhxc3gsghq828anps.jpg",
      B + "xzxicvy77gt4d6pr7aw7nyj9gks.jpg",
      B + "bbo9fukyrxnzk3bm799xnszn9fs.jpg",
      B + "qnrlipi4lyhg9rd38xpsznoej7s.jpg",
      B + "mdlglpd8mv2ecdwdgsdd3nouqns.jpg",
    ],
  },
  {
    id: "confirmation",
    title: "Confirmation 2015",
    subtitle: "75th Anniversary Year",
    thumbnail: B + "uv56575smsh5wo36xd2fispcrws.jpg",
    photos: [
      B + "uv56575smsh5wo36xd2fispcrws.jpg",
      B + "lnhyacprlde68ykf3dyss0oed4s.JPG",
      B + "nq5dwa70303i8c6v2se4mgquhvs.jpg",
      B + "kx065ztuovpdek9sbtvat0belus.jpg",
    ],
  },
  {
    id: "anniversary-mass",
    title: "75th Anniversary Mass",
    subtitle: "October 26, 2014",
    thumbnail: B + "r7ptab8akvh407dyj0vase00b1s.jpg",
    photos: [
      B + "r7ptab8akvh407dyj0vase00b1s.jpg",
      B + "j11ebjj3ewh0ey51o3yh0byi6qs.jpg",
      B + "h54ev46rrzdj3aatal0jmgdsl5s.jpg",
      B + "svtv9lktyyzep9iz4dl67qn9brs.jpg",
      B + "xrs83oetwdp397jcd37tzgo265s.jpg",
      B + "gd4bltzconaearqwzjpzv1i04os.jpg",
      B + "1l3y62dxgz210sa7fkb03wo7vgs.jpg",
      B + "zm7r2daqaae33aiw106mayicdss.jpg",
      B + "3as87bopvhh19er87tpq7ma23zs.jpg",
      B + "9rbmwft4p7zrlg03x6u1xuozrcs.jpg",
      B + "y0b1u1n7tq06ri0ygf2nm8b25ys.jpg",
      B + "qd9d583w2u2wqcuiv6luy2vwe8s.jpg",
      B + "t9qw0k34o9dwydgnibedp2otp3s.jpg",
      B + "ud0870gd6a9p05q43cndy67yies.jpg",
      B + "6coyq37khdvz5u8nf99bq6hlbfs.jpg",
      B + "n1jpv1krwq777llj7149o54qaxs.jpg",
      B + "y08puav7ryksx81aj6cw5u4gmls.jpg",
      B + "t1lbdpb37kjf8mwexabypg0xs4s.jpg",
      B + "46r0h08ugtjejgqplr0syvkedds.jpg",
      B + "e3fa20y1wcxzy4p4xe9jsgmj3as.jpg",
      B + "sp93rli7iszksidapc4tqgsdees.jpg",
      B + "wj41nxxlizvd0ifn7a8z2cejjms.jpg",
      B + "tvkwhkffmtzrdsjo9n4syxmxczs.jpg",
      B + "7nldg3cjvn3l8z1raclms9qgqzs.jpg",
      B + "p30rxsznwpvyd9fywpo0gmkndqs.jpg",
      B + "ku6zzdfp18grggpmrv7ahwcn8js.jpg",
      B + "5j0b36fx1c9mt0k0j1kdov53nws.jpg",
      B + "pxnqxjdphggspqo7esu6w0wbyts.jpg",
      B + "ngp3um6k9p8w490xpalbmllgdzs.jpg",
      B + "qg9d5ewza6flf3aw46lkzm8suvs.jpg",
      B + "ujoffod0z8tksqoa5c14vz81g5s.jpg",
      B + "biyecbqjl58knnv5n6mh91tp9as.jpg",
      B + "yo5xdy6x5bav7vii19dv53ii3es.jpg",
      B + "rp4ayn3r353buuryfe31n51djps.jpg",
      B + "nl9n6nm7nic02xceg0c984m0bcs.jpg",
      B + "iejxvereyyw6l7upsxksvom7bfs.jpg",
      B + "8406y1w52js7rqvoj6hdblbsp2s.jpg",
      B + "wn4gu687qca0vv1c601oxu2115s.jpg",
      B + "iofd138rkus64o43owudsf4l4us.jpg",
      B + "w9svcakqldjbwbuc6ndm3gleids.jpg",
      B + "e64vtvjgr2g0zx1sog0jcuk4jts.jpg",
      B + "ilfgcx6p1xbtzo0is3fqupbv9hs.jpg",
      B + "ek4icz81ba2gp4c6ia8pocziihs.jpg",
      B + "chum4wknr9mcfg5hdx3z2fggbks.jpg",
      B + "q95rljinmwpu2mf13y11a2cxzxs.jpg",
      B + "rn6pm9w48dd341mz3fxpwjzysds.jpg",
      B + "fd95a6ys5nzmrmj4zgnl8z7mx6s.jpg",
      B + "efb14lqdm1ovuieguivyyhp2f1s.jpg",
      B + "nl5ag70328j3txo9hxujhegksms.jpg",
      B + "tcglnh2filpt8fi1dsu4kjhi6gs.jpg",
      B + "kntxrteq1va3pk2fmnfq78uve3s.jpg",
      B + "llyup3zitrfk7g8bf937gs6xe8s.jpg",
      B + "yxrlv3bd26icw25whjk75tz2yms.jpg",
      B + "9kdodggyvy7qh9tgpgefmcdl9js.jpg",
      B + "y5e4i16ouvy7zsxyacr5jqgpsks.jpg",
      B + "3v8ukiezrautnka6gqjm0e5n9xs.jpg",
      B + "no9ge6cqwhp15lf0tymjzhzn1as.jpg",
      B + "z32kk15uibuvouno3f25vs9f08s.jpg",
      B + "v03me802n8nxjumh3hncuc51tos.jpg",
      B + "mvuasjxc8kdqvjsrhxwttir9g2s.jpg",
      B + "wyzvm60opdxy1j566uica63hdus.jpg",
      B + "faq8mc79cl35a6qtz4ib5r3mifs.jpg",
      B + "y4av0zz45wa8jznkil2sjr277us.jpg",
      B + "0q3l6jtcsbulvvfxvp42arwxqws.jpg",
      B + "7hv25ecmewpje00zqptuwsb9aus.jpg",
      B + "faccdoy5ne7o6cg86o1fx2d8nbs.jpg",
      B + "s5fy2xov818gznjk21gifpqopos.jpg",
      B + "sxfcxcblrr565a5pwlkpqeeu3is.jpg",
      B + "8f1fkhomso62b7kgcsp00to7ass.jpg",
      B + "felay5nf6huhikg4ba0c8f9579s.jpg",
      B + "14s6fya7hz95z3yx3cyth2lm4es.jpg",
      B + "iqlq61zwvhsvfleh8iypr0jeq5s.jpg",
      B + "qg8m6wlc11kmu3ljpqcsn36znys.jpg",
      B + "42qnfujlo3onzqtxrsum8cxza8s.jpg",
      B + "gnie14qa9s1p412n8wwepsnvmds.jpg",
      B + "yos7tg44w52ju5iaapciq212r7s.jpg",
      B + "hdpsk24vpkpnu6yhuvj5nke0p8s.jpg",
      B + "17dxqp22mh6cn12si1zsbmxbets.jpg",
      B + "5m7kq0ifvtmuzmasv8yvxoa61fs.jpg",
      B + "nojarjbigwmboghbu7c1pfsi5ss.jpg",
      B + "el81e5hb32z9ksr9dma72krlr9s.jpg",
      B + "eside3s2kv6wlxrjg216ueoe8zs.jpg",
      B + "xdgrvbdqb32j9lzhu7r1x231y2s.jpg",
      B + "qc7jogkw6537kqc82s8vqq0qi4s.jpg",
      B + "k45dtdx21mxkd5zxzogf4tqkozs.jpg",
      B + "zsgv6nmkf2nccy4ays7yhk9d3ms.jpg",
      B + "kr1vivvqn6ywbgdqfga7qd51t6s.jpg",
      B + "5i4v587xqt0cwlhd5az21mshghs.jpg",
      B + "pi6ax5vflt6yy4fgugw1a1qqmus.jpg",
      B + "i02c6ajmfqi0yit4u19dyb3fmks.jpg",
      B + "qjqvxsg8ccodgi4hp5ez4suri7s.jpg",
      B + "7jqpa2043zbevb7r08luadel5ns.jpg",
      B + "ci25kntb641g2kwg9n6n2ilsozs.jpg",
      B + "xes9sj4iopmb5gn3gexdpbeyxhs.jpg",
      B + "ublcdwimqp7vyyyisxa9nixllas.jpg",
      B + "pzkn79le2byfrpiaemga6p6ljhs.jpg",
      B + "vftgeo5uymuwaj5nqo6bkyxwb2s.jpg",
      B + "0qs7g7mnts62u5h9vsvuoyi64xs.jpg",
      B + "bh6ydn1imbelv1fol5612gm4hzs.jpg",
      B + "yh82p8dsdtmbeub4rd9z5g0uirs.jpg",
      B + "vdl3hnxi3lyk5v6z9ikopdq95ks.jpg",
      B + "3qerdxj2qfkuc1amurz148ay7rs.jpg",
      B + "x1oujib5do29oskz81hs9thk6ds.jpg",
      B + "1vzdghbw0ay38ga4l6uhr30f79s.jpg",
      B + "kas21scgi9ayhqgw4v7dn2q680s.jpg",
      B + "h5h6zqta94e8n0a86796juyc0bs.jpg",
      B + "gencwwxcvo7ijyedufqkx5kyo6s.jpg",
      B + "0rrzl27axgotlyvx12l1gtfuwzs.jpg",
      B + "4lmwzai32mn6iojl41bnig00hls.jpg",
      B + "kwxb92523xkoq4cuflh51wc2sps.jpg",
      B + "bfjpy7wwr0ke2e477mnr2oucmas.jpg",
      B + "shdggs29iapjm8ww3nwz3fw610s.jpg",
      B + "9xncvdmy5sg62mesk5rtzzl52zs.jpg",
      B + "r4l6f4o3cct6ahwhrodjuezqpus.jpg",
      B + "lgn67kvj314eqiro36p6py7rqas.jpg",
      B + "ba5tyf1gni7g1jfpuw2jgcrrnzs.jpg",
      B + "92c5vw71420yrj91gimj8u6hofs.jpg",
      B + "rt7kqx9bkcd3yw9zz5381b9oles.jpg",
      B + "rodmydbifpcamcfwu9d3mx2ryts.jpg",
      B + "ct89ydld96i6utfftjgy8za758s.jpg",
      B + "7mmrb6a7xuk4u6b5pj29q37fyes.jpg",
      B + "s2oc9hepl33zt4ny1ma5tn738ts.jpg",
      B + "wlyznxah9v4cubppqubjoumrz2s.jpg",
      B + "znqta7kng0v4deaf46kfmlyynes.jpg",
      B + "lxv5qy1srmvnylru0qnprzxj0cs.jpg",
      B + "e7n1ikwqz0ybj5yty6m8azxtu6s.jpg",
    ],
  },
  {
    id: "anniversary-scott",
    title: "75th Anniversary Mass",
    subtitle: "Photos by Scott",
    thumbnail: B + "7fi7uvdi1j4qrc8g9wfeya17v6s.JPG",
    photos: [
      B + "392nel23pthynq1g8hmjgun2bxs.JPG",
      B + "49lf1y976jo2ezh7paeuk40wnvs.JPG",
      B + "b47fcx2gpt0fc0nhzyu6682079s.JPG",
      B + "0y943g0i3rb6tc9yqg8dbh951bs.JPG",
      B + "i55x0fth7azrmy1gx82mewbqd7s.JPG",
      B + "sriggrm2dn5u3fc23zeags3k0os.JPG",
      B + "ratlkg62bc5w3kwrizm9s0j9xzs.JPG",
      B + "lq203rx2q5hgw5n4po603ybd9xs.JPG",
      B + "tddegkrl4vs80h2ijfqui07eiqs.JPG",
      B + "gnoezwhhresrdymg773jxqovdbs.JPG",
      B + "ghbuiwepv18n3q50ijnxrlvk5cs.JPG",
      B + "qtgqhwt49hxiifrts33337ebu4s.JPG",
      B + "or6tos63ofk382urti6gnfyuhos.JPG",
      B + "txf5mqugmotyc0fc8acaeokvnhs.JPG",
      B + "jdg9shtp5u7ny0w4xvnm7a3ndys.JPG",
      B + "wk55t03r4nbld0p18esuj7mxj2s.JPG",
      B + "rtlpq4c26npru88vnfhgr640lms.JPG",
      B + "ly367ccunjbmvalhvczkbhjr2fs.JPG",
      B + "g87j6iof8u3wxmzqv0ooqqbms6s.JPG",
      B + "7kgngwlshhd30tf7hj80agzi5ys.JPG",
      B + "d1h2sce2i4cojssealoy879642s.JPG",
      B + "x9bi4umhbx93csh14qb8g002lis.JPG",
      B + "w275gdwhkwb4ld2q2hkha8ln1ns.JPG",
      B + "g4aqh2z0yzt869a20yqd60ccuis.JPG",
      B + "4itcy3d45g2cwzlu2tuxjq1lkas.JPG",
      B + "0zigl2kbqzfzkdzq43yi696b4ws.JPG",
      B + "946cx0mee4dmvgafj2c8dki5dzs.JPG",
      B + "jr2zy66jxlbj7tvtqamvz9dduws.JPG",
      B + "c05vnh6odd0skc8nic3wvrgf72s.JPG",
      B + "6j3f3h6y3oal04jy4nbaqt8xz5s.JPG",
      B + "pjvjhg6oihyfzvsl9w09615xwls.JPG",
      B + "50yg2ltkxxtuijgm6mw0k5rfyjs.JPG",
      B + "wde20kj0uwdsnc2euca2k3uz0js.JPG",
      B + "aaos846itwihrbshhe6qucfj5ss.JPG",
      B + "59rbyx7anzm9x0ab1jueewu3frs.JPG",
      B + "4np45t88c5jot1ojweug7ur9k0s.JPG",
      B + "esye23ep0otb07n9vu584pzabes.JPG",
      B + "xqh5rkh7q16bwlbt5sdfrk568fs.JPG",
      B + "f778nzaitkk183ihy4d77og0hgs.JPG",
      B + "t9jteoxlijqb2jpqh4oqq7m5q1s.JPG",
      B + "e107yhsf5xzda1tn1xq12n8cuzs.JPG",
      B + "q24vy3peu58dx3uxzd8og0a3rus.JPG",
      B + "yjw5l0mfx1ilomwvejhavy4pnjs.JPG",
      B + "57pwaqe7i1n6uezjxos4fzw5b6s.JPG",
      B + "uit7synl5wdxcczfbiy2awl8ans.JPG",
      B + "bsauh7zeqzmr2ryl9dr2p7wvb1s.JPG",
      B + "88nyc6s1pwyt3ylk2r4attedqqs.JPG",
      B + "szpx15zxclo3gt3hp32w4yg9zds.JPG",
      B + "9ey9a4116p7yhqq7towijd07nss.JPG",
      B + "wc4k2zb1inhkuaffe45cbxzdvrs.JPG",
      B + "m3edarqu7npim7a0u986g3mu96s.JPG",
      B + "2svhv42plfz3ccgyr912jp8t8cs.JPG",
      B + "mzc9s8zuo8r2fm8e8sb0295zk6s.JPG",
      B + "im5pf3guk3xnx7srkrjkwrdb4ws.JPG",
      B + "l6kycdnh1bgb1gma1lscj0nbrys.JPG",
      B + "622tfqaocg1ljbp7103v4q8ft4s.JPG",
      B + "eegi9shph5g78yoqwkdqwoodk6s.JPG",
      B + "khtw579z2kvhpc68acuemtd8t9s.JPG",
      B + "9jmq8zbg02vqkfrk3u5skk1u2as.JPG",
      B + "5g9ejzuot89zvinys1iiqpoyens.JPG",
      B + "pezmyspgmcingr4qx0ibtmvde8s.JPG",
      B + "r1itfzfolu9wxw6an3k46nx5oqs.JPG",
      B + "9hgp6g99et3jq0qw8emc6pcoecs.JPG",
      B + "0zqy806ngk4cje1lqh5110ci4js.JPG",
      B + "bqh5hvovzjpz685mnbqs0sh1sfs.JPG",
      B + "fc9m4boe2gy3nssirc74ssdt50s.JPG",
      B + "8bdwom0cytm7yw3zsyqh080pwgs.JPG",
      B + "otlletjplzijo3fh6dyyfdwbyrs.JPG",
      B + "wo4qu19i339ook90fhc5w9zwvxs.JPG",
      B + "69x56xujupj3rxqwjuzrx30zaks.JPG",
      B + "mfur47zjdhk24pyi4wua7ftvn5s.JPG",
      B + "xlm1826vq7cnt0pqxnig909ohxs.JPG",
      B + "kb3rgn52vggxyiumy3y84fwqp4s.JPG",
      B + "pjuxhnzn8mngu1zd6hhajsew10s.JPG",
      B + "7fi7uvdi1j4qrc8g9wfeya17v6s.JPG",
      B + "oycvxr8x25xa3nypzodcdr38vbs.JPG",
      B + "fl8c4cjfk8uvbk9zwx594hdinus.JPG",
      B + "vdzdymr10u3f41qbyyefbsrsa0s.JPG",
      B + "sbfyr1jttp9v0ujfos8a63rte8s.JPG",
      B + "nozqiuwdjt147n9yw6mh855hwzs.JPG",
      B + "8yii1xgcdppswt0s40irgs8dnts.JPG",
      B + "52y9w04b2s7vshgjd0yx2k93i2s.JPG",
      B + "yemvzqs9pqmic9nq4qpcp8h6vjs.JPG",
      B + "akze58zz11gwwi80rr2nep10h0s.JPG",
    ],
  },
  {
    id: "fontanini",
    title: "Fontanini Presepio Display",
    subtitle: "2014",
    thumbnail: B + "atzoyxebpm2wl22urdjllkzuons.JPG",
    photos: [
      B + "atzoyxebpm2wl22urdjllkzuons.JPG",
      B + "dm2divc9bda97m477cjpa59h1fs.JPG",
      B + "6aebkmnqyjzvwpfwd0f6xr8b14s.JPG",
      B + "qw7klobehz5yvk29ecxb30f8kls.jpg",
      B + "92vxuo76e9wuxiykb8pai7qzzls.JPG",
      B + "szm26k5xjj7nidp10xtk9aphsqs.JPG",
      B + "l68devido5btoy70plhin793c0tos.JPG",
      B + "irtge3idv23xzk6gxzu86df5t1s.jpg",
      B + "lbr0xrgo7ez2mdpch6xkjn1d1zs.JPG",
      B + "fkrud1yhqfkep9dwmvaehg1x1ws.JPG",
      B + "qfwflszis1og3bn3om24dayrsps.JPG",
      B + "s4nl7k250hmzm01gqzmiftymn4s.jpg",
      B + "6h2o4qvpjcidu5b9bx39532guus.JPG",
      B + "1oqclh9eq1cgog6uadv695ofrks.jpg",
      B + "1ppe6si2gerftm0umt6utoqowps.JPG",
      B + "xab1l6oxjvxcvdh9yf1gvsepi2s.jpg",
      B + "j925blvyetdjstxp4iwpp2yygys.jpg",
      B + "wf5uaei7olwmwqzv2li1ek4fv9s.jpg",
      B + "ed5irezhmwp07x0f983hx3l44hs.JPG",
      B + "u4ryoivnfqditfg0zhx4vttj2ls.jpg",
      B + "enyw871y92afce36iscm1j4w0hs.jpg",
      B + "bm6ai0dbk1wotfrr990vtb952as.JPG",
      B + "cxjyajnj74ci5bsohdpr0kmtxls.JPG",
      B + "nsoint1hzqna135572cckgk8zcs.JPG",
      B + "cq8bk9j3f3w7h6g7xpr9qlfml9s.JPG",
      B + "7f9hu5alzbyc2bpisibdd7rmnis.jpg",
      B + "050tencyoeg1e7q2ggykaf29mas.jpg",
      B + "4y3zhplufpaclbnr46wpc6059qs.jpg",
      B + "4e5z71l1xhs0o2urai9f3ab9fds.jpg",
      B + "myjbf1vb3onukc6args51l0a98s.JPG",
      B + "fu6us8xpmic0571rt5iccye3i8s.jpg",
      B + "yb1ryw5qjy5guqyf16ammb3chos.JPG",
      B + "dgp3qwvlclv0lgwxh906n85btxs.JPG",
      B + "0eyajh94ok43lyuqze20gpvrz1s.jpg",
      B + "nhsdeaukshvzds7bwmwi8buq97s.JPG",
      B + "pnj520v8q86evjs335odt11l3ts.JPG",
      B + "u1kb00xvy66kpecfnlqde8eehys.JPG",
      B + "t5p0ekx7m2nfiy5xuvj74guijgs.jpg",
      B + "1pjanc34c7boxulfanvff2nibbs.jpg",
      B + "c23w86bmai73e7cpnxah9iut3ps.jpg",
      B + "d1bocni6oap19kf2ss5hcipgjps.jpg",
      B + "exkv4zoirpikc98av1osvvrijcs.jpg",
      B + "r3yi8i5v11b4yzkxcz32dvt1iqs.jpg",
      B + "nr7wrl9d7lblpfqc3dhfa8ies9s.jpg",
      B + "iz8dt23bx2ztoabmirsdsvn7wos.jpg",
      B + "vjjp2an96ppy8mqoes4bwzxgt6s.jpg",
      B + "hoq4o660ugltgbl9wt36py9llzs.jpg",
      B + "gubka2occnuf0no5yy4cncmtn4s.jpg",
      B + "hj8zli96rxv9f3brjf0sit2kajs.jpg",
    ],
  },
];

export default function PhotosContent() {
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIdx === null || !activeAlbum) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      else if (e.key === "ArrowLeft")
        setLightboxIdx((i) => (i !== null && i > 0 ? i - 1 : i));
      else if (e.key === "ArrowRight")
        setLightboxIdx((i) =>
          i !== null && i < activeAlbum.photos.length - 1 ? i + 1 : i
        );
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, activeAlbum]);

  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIdx]);

  function openAlbum(album: Album) {
    setActiveAlbum(album);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeAlbum() {
    setActiveAlbum(null);
    setLightboxIdx(null);
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-6 overflow-hidden"
        style={{ background: "var(--navy)" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, var(--gold) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(184,146,42,0.2)",
                  border: "1px solid rgba(184,146,42,0.4)",
                }}
              >
                <Camera
                  className="w-8 h-8"
                  style={{ color: "var(--gold-light)" }}
                />
              </div>
            </div>
            <span
              className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              St. Ann Catholic Church
            </span>
            <h1
              className="text-white mt-3 mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              Parish{" "}
              <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>
                Photos
              </em>
            </h1>
            <div
              className="w-12 h-0.5 mx-auto mb-6"
              style={{ background: "var(--gold)" }}
            />
            <p
              className="text-white/65 max-w-xl mx-auto text-lg leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              Moments of faith, community, and celebration from the life of
              St. Ann Parish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Album grid or album detail */}
      <AnimatePresence mode="wait">
        {!activeAlbum ? (
          <motion.section
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="py-20 px-6"
            style={{ background: "var(--cream)" }}
          >
            <div className="max-w-7xl mx-auto">
              <FadeUp>
                <div className="text-center mb-12">
                  <span
                    className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Browse Albums
                  </span>
                  <h2
                    className="mt-3 mb-4"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1.8rem, 4vw, 3rem)",
                      fontWeight: 300,
                      color: "var(--navy)",
                    }}
                  >
                    Photo Galleries
                  </h2>
                  <div
                    className="w-12 h-0.5 mx-auto"
                    style={{ background: "var(--gold)" }}
                  />
                </div>
              </FadeUp>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map((album, i) => (
                  <FadeUp key={album.id} delay={0.06 * i}>
                    <button
                      onClick={() => openAlbum(album)}
                      className="group w-full text-left rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                      style={{ borderColor: "var(--border)", background: "white" }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={album.thumbnail}
                          alt={album.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div
                          className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium text-white"
                          style={{
                            background: "rgba(0,0,0,0.55)",
                            fontFamily: "'Cinzel', serif",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {album.photos.length} photos
                        </div>
                      </div>
                      <div className="p-5">
                        <h3
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "1.35rem",
                            fontWeight: 400,
                            color: "var(--navy)",
                          }}
                        >
                          {album.title}
                        </h3>
                        {album.subtitle && (
                          <p
                            className="text-sm mt-0.5"
                            style={{
                              fontFamily: "'Crimson Pro', serif",
                              color: "var(--text-mid)",
                            }}
                          >
                            {album.subtitle}
                          </p>
                        )}
                      </div>
                    </button>
                  </FadeUp>
                ))}
              </div>
            </div>
          </motion.section>
        ) : (
          <motion.section
            key="album"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="py-16 px-6"
            style={{ background: "var(--cream)" }}
          >
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-10">
                <button
                  onClick={closeAlbum}
                  className="inline-flex items-center gap-1.5 text-sm transition-colors duration-150 hover:underline cursor-pointer"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "var(--gold)",
                    letterSpacing: "0.06em",
                  }}
                >
                  <ChevronLeft className="w-4 h-4" />
                  All Albums
                </button>
                <div
                  className="h-4 w-px"
                  style={{ background: "var(--border)" }}
                />
                <div>
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1.4rem, 3vw, 2rem)",
                      fontWeight: 400,
                      color: "var(--navy)",
                    }}
                  >
                    {activeAlbum.title}
                    {activeAlbum.subtitle && (
                      <span
                        className="ml-2"
                        style={{
                          fontSize: "clamp(1rem, 2vw, 1.3rem)",
                          color: "var(--text-mid)",
                          fontWeight: 300,
                        }}
                      >
                        — {activeAlbum.subtitle}
                      </span>
                    )}
                  </h2>
                  <p
                    className="text-xs tracking-widest uppercase mt-0.5"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--muted)",
                    }}
                  >
                    {activeAlbum.photos.length} photos
                  </p>
                </div>
              </div>

              {/* Photo grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1.5">
                {activeAlbum.photos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightboxIdx(idx)}
                    className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                    aria-label={`Open photo ${idx + 1} of ${activeAlbum.photos.length}`}
                  >
                    <Image
                      src={photo}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                  </button>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Back nav */}
      <section className="py-10 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="text-sm transition-colors duration-150 hover:underline"
            style={{
              fontFamily: "'Cinzel', serif",
              color: "var(--gold)",
              letterSpacing: "0.06em",
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && activeAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.93)" }}
            onClick={() => setLightboxIdx(null)}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
              onClick={() => setLightboxIdx(null)}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div
              className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-xs"
              style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.12em" }}
            >
              {lightboxIdx + 1} / {activeAlbum.photos.length}
            </div>

            {/* Prev */}
            {lightboxIdx > 0 && (
              <button
                className="absolute left-3 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx((i) => (i !== null && i > 0 ? i - 1 : i));
                }}
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
            )}

            {/* Next */}
            {lightboxIdx < activeAlbum.photos.length - 1 && (
              <button
                className="absolute right-3 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx((i) =>
                    i !== null && i < activeAlbum.photos.length - 1
                      ? i + 1
                      : i
                  );
                }}
                aria-label="Next photo"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            )}

            {/* Image */}
            <div
              className="relative"
              style={{
                width: "min(90vw, 1100px)",
                height: "min(85vh, 850px)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeAlbum.photos[lightboxIdx]}
                alt=""
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
