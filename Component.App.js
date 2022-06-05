const ThoriumServer = require('./app.js');

ThoriumServer.include(`${__dirname}/public/stylesheets/style.css`);

const {
  App:App ,
  Nav:Nav ,
  Section:Section,
  Div:Div,
  H1:H1,
  Paragraphe:Paragraphe,
  Button:Button,
} = ThoriumServer.ssr.components;

module.exports = (function(){

  const content_title = new H1('Thorium-server');
  const content_image = new Div({
    prop : {
      class : 'app-content-image'
    }
  });
  const content_footer = new Div({
    prop : {
      class : 'app-content-footer'
    },
    childrens : [
      new Paragraphe('View more'),
      new Paragraphe('Documentation'),
      new Paragraphe('View more'),
    ]
  })

  const Content = new class extends Div{

    constructor(){
      super({
        prop : {
          class : 'app-content'
        },
        childrens : [ content_title, content_image , content_footer ]
      })
    }

  }

  const MyApp = class extends App{

    constructor(){
      super({
        prop : {
          id : 'app',
          class : 'app'
        },
        childrens : [Content]
      })
    }
  };

  return new MyApp();

})()
