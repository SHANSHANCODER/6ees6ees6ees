class HoneyMakerBee extends Bee{
  constructor(age, job, color, food, honeyPot){
    super(food,color);
    this.age = 10;
    this.job = "make honey";
  //  this.color = "yellow";
    this.honeyPot = 0;

  }
  makeHoney(){
    this.honeyPot ++;
  }
  giveHoney(){
    this.honeyPot --;
  }
};
