const ThoriumServer = require('Thorium-server').default;

ThoriumServer.include(`${__dirname}/public/stylesheets/style.css`);

const {
  App:App ,
  Nav:Nav ,
  Section:Section,
  Div:Div,
  Paragraphe:Paragraphe,
  Button:Button
} = ThoriumServer.ssr.components;

module.exports = (function(){

  const MyApp = class extends App{

    static Thuile = class extends Div{
      constructor(text){
        super({
          prop : {
            class : 'section-thuile',
          },
          childrens : [
            new Paragraphe(text)
          ]
        })
      }
    }

    constructor(){
      super({
        prop : {
          id : 'app',
          class : 'app'
        },
        childrens : [
          new Nav({
            prop : {
              name : 'app-nav',
              class : 'app-nav'
            },
            childrens : [
              new Button({ prop : { text : 'Hello' } }),
              new Button({ prop : { text : 'je' } }),
              new Button({ prop : { text : 'suis' } }),
              new Button({ prop : { text : 'une' } }),
              new Button({ prop : { text : 'nav' } }),
            ]
          }),
          new Section({
            prop : {
              class : 'app-section'
            },
            childrens : [
              new MyApp.Thuile('HELLO'),
              new MyApp.Thuile('Benoit'),
              new MyApp.Thuile('Guillaume'),
              new MyApp.Thuile('Mario'),
              new MyApp.Thuile('Pearl'),
              new MyApp.Thuile('Mamy'),
              new MyApp.Thuile('Papy'),
              new MyApp.Thuile('Patrick'),
              new MyApp.Thuile('Mamy2'),
              new MyApp.Thuile('Papy2'),
            ]
          })
        ]
      })
    }
  };

  return new MyApp();

})()
