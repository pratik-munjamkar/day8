class uber{
    constructor(name,pick_up_location,destination,distance){
      this.name=name ;
      this.pick_up_location=pick_up_location ;
      this.destination=destination ;
      this.distance=distance ;
      this.price=function(){
          console.log(
         `Cost for 10km: Rs.90, 
          Pick-Up-Location:${this.pick_up_location} 
          Destination:${this.destination}  
          Distance: ${this.distance} 
          your price:`,(90*this.distance));
      }
    }
}
const passenger=new uber("Anushka","KP_road","pune","18");
passenger.price();