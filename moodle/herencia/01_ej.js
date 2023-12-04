let animal = {
    family:"",
    paws:0,
    move:""
};

Object.setPrototypeOf(cat, animal);
Object.setPrototypeOf(raven, animal);
Object.setPrototypeOf(horse, animal);

cat.family = "feline";
cat.paws = 4;
cat.move = "walks";

raven.family = "bird";
raven.paws = 2;
raven.move = "flies";

horse.family = "equine";
horse.paws = 4;
horse.move = "runs";

console.log(cat);
console.log(raven);
console.log(horse);
