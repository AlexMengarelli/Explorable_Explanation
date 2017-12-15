// sources: Chidley, Joe. "Seduced by the siren call of computers: have today's sophisticated computers become addictive?" Maclean's, 27 Mar. 1995, p. 50+. Opposing Viewpoints in Context, lwhs.idm.oclc.org/login?url=http://link.galegroup.com/apps/doc/A16762022/OVIC?u=san47811&xid=cf3a1bde. Accessed 29 Oct. 2017.
// "Computers breed new addiction." Sun-Herald [Sydney, Australia], 15 Oct. 2006, p. 42. Opposing Viewpoints in Context, lwhs.idm.oclc.org/login?url=http://link.galegroup.com/apps/doc/A283529924/OVIC?u=san47811&xid=26658f73. Accessed 29 Oct. 2017.
// Kershaw, Sarah. "Hooked On the Web: Help Is on the Way." New York Times, 1 Dec. 2005, p. G1(L). Opposing Viewpoints in Context, lwhs.idm.oclc.org/login?url=http://link.galegroup.com/apps/doc/A139286146/OVIC?u=san47811&xid=ff05d25b. Accessed 29 Oct. 2017.
// http://interestingmedical.com/wp-content/uploads/2015/10/360x270xinternet_addiction.jpg.pagespeed.ic.PC6F3TegEw.jpg
// http://3.bp.blogspot.com/-O4JXlH2iR6k/VUruKDS2AOI/AAAAAAAAARM/Eic38g34IO4/s1600/zedaludo.jpg
// https://www.webroot.com/us/en/home/resources/tips/digital-family-life/family-internet-addiction-too-much-time-online
// http://goodlifefamilymag.com/wp-content/uploads/2015/01/Good-Advice_Teens-at-computer-347x249_c.jpg
// http://ts-1.eee.hku.hk/ccst9015sp12/e-addiction2/files/2012/04/computer_addiction.jpg
var slider;
var img;
var img1;
var img2;
var img3;
var img4;
var flag = 0;
var time = 1;
var button;
function preload() {
  img = loadImage("computerAddiction.jpg");
  img1 = loadImage("Media-Use-Over-Time.png");
  img2 = loadImage("computerAddict.jpg");
  img3 = loadImage("hw-on-computer.jpg");
  img4 = loadImage("collaboration.jpg");
}

var donut = {
    x:212,
    y:330,
    diameter:20,


		drawDonut: function(){ //This is the little black circle that goes over the slider
      fill(0, 0, 0);
			ellipse(this.x, this.y, this.diameter, this.diameter);

		},

		moveDonut: function(){
			if (this.x < 492) {
       this.x = this.x+1;
     } else (this.x > 492);


   }




};

var sun = {
  x:213,
  y:600,
  diameter:100,

  drawSun: function(){ //the yellow sun that rises as you drag the slider
    fill(255, 255, 0);

    ellipse(sun.x, sun.y, sun.diameter, sun.diameter);
  },

    moveSun: function(){
      if (sun.x < 490) {
        sun.x = sun.x+slider.value()/500;
        sun.y = sun.y-0.6;
      } else (sun.x > 512);
      if (sun.y < 400) {
        sun.y = sun.y+1;
      } else(sun.y > 400);

    }



};



function setup() {
var backgroundColors = [color('#aabf12'), color('#165512'), color('#fe3fa2'), color('#a345cd'), color('#FF532E'), color('#1FB5F1')];

  createCanvas(1000, 1000);
  background(backgroundColors[int(random(0, backgroundColors.length))]);
  button = createButton('Yes!');
  button.position(30, 90);
  button.mousePressed(caYes);
  slider = createSlider(0, 645, 0);
  slider.position(200, 400);
  slider.style('width', '300px');
  var val = slider.value();
  button = createButton('No!');
  button.position(600, 90);
  button.mousePressed(caNo);






}

function caYes() {
fill(255,255,255);
rect(25,0,730,675);
textSize(20)
fill(0,100,200)
textSize(15);
text("Janice Vian, a Calgary childhood psychologist, says that the violence of computer games, and the repeated", 30, 50);
text("stimulation designed to keep people playing, are potentially habit-forming, even dangerous.", 30, 65);
text("Stephen White, a fourth-year computer science major at the University of Waterloo in Ontario--and the creator", 30, 90);
text("of the MOO program that is now the basis for many of the virtual communities-says that MUDs “can be very", 30, 105);
text("addictive, even destructive.” MUD (multi-user dimensions) he says, can also stand for Multiple Undergraduate", 30, 120);
text("Destroyers because “there are a lot of people who have flunked out because of addiction to these things.”", 30, 135);
text("“With the increase in the amount of stimulation available through computers now,” Dr. Arthur Herscovitch, a", 30, 160);
text("psychologist at the Winnipeg-based Addictions Foundation of Manitoba says, “I can see the possibility of", 30, 175);
text("addictions developing.”", 30, 190);
text("Addiction to computer games is as serious as gambling and drug use, clinical psychologist Jo Lamble has", 30, 215);
text("warned. Computer game addicts spend so much time playing they can lose their jobs, break up their families", 30, 230);
text("and stunt their social development, says Dr. Lamble.", 30, 245);
text("Mental health professionals estimate that 6 percent to 10 percent of the approximately 189 million Internet", 30, 270);
text("users in this country have a dependency that can be as destructive as alcoholism and drug addiction, and", 30, 285);
text("they are rushing to treat it.", 30, 300);
image(img, 30, 315, 140, 150);
image(img1, 545, 400, 200, 250);
image(img2, 30, 500, 150, 130);


button = createButton('Clear')
button.position(550, 370);
button.mousePressed(disappear);


}

function disappear(){
  var flag=flag+1;
  clear(caYes);

}

function disappear2(){
  clear(caNo)
}

function caNo(){
fill(255,255,255);
rect(25,0,730,675);
textSize(20)
fill(0,100,200)
textSize(15);
text("Similarly, computers can be a testing ground for identity, says Sherry Turkle, a psychologist at the", 30, 50);
text("Massachusetts Institute of Technology in Cambridge, and what appears to be an obsession may in fact be a", 30, 65);
text("healthy process.", 30, 80);
text("“There is absolutely no evidence that spending time online, exchanging e-mail with family and friends, is the", 30, 105);
text("least bit harmful. We know that people who are depressed or anxious are likely to go online for escape and", 30, 120);
text("that doing so helps them.” says Sara Kiesler, professor of computer science and human-computer interaction", 30, 135);
text("at Carnegie Mellon University.", 30, 150);
text("...If other parts of life--like studying and working--do not suffer, the computer time may actually be beneficial to", 30, 175);
text("some people, Sherry Turkle says. “Some adolescents go through six months or a year of intensive use, but", 30, 190);
text("then the characters and the experiences have offered them a way to work through personal issues,”", 30, 205);
text("Experts have not acknowledged computer addiction as a real problem.", 30, 230);
image(img3, 540, 400, 200, 200);
image(img4, 30, 300, 150, 150);

button = createButton('Clear')
button.position(550, 370);
button.mousePressed(disappear2);

}


function draw() {
  text("drag me!", 200, 355);
  val = slider.value()
  fill(0, 0, 0);
  noStroke();
  rect(200, 365, 300, 250);
  donut.drawDonut();
  donut.moveDonut();
  sun.drawSun();
  sun.moveSun();


  for (var i=1; i < 645; i++){
  textSize(15);
  fill(0,0,0);
  text("minutes =", 300, 355);
  text(val, 370, 355);
  fill(255, 255, 255);
  rect(370, 340, 25, 20);
  fill(0, 0, 0);
  text(val, 370, 355);
  }
  if (val==645) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    text("TOTAL TIME SPENT ON COMPUTERS", 505, 320);
    text("PER DAY BY KIDS AGED 8-18 = 645", 505, 340);
    text("MINUTES, OR 10 HOURS AND 45", 505, 360);
    text("MINUTES!", 505, 380);
  }

  if (flag==1) { //I tried to make ti so the sun animation only appeared when you clicked the yes button but it didn't work
    fill(255, 255, 255);
    rect(0, 320, 1000, 1000);
  } else (sun.moveSun());


}
