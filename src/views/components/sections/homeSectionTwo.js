import background2 from '../../../assets//images/background/background2.png';
import darthvader from '../../../assets/images/elements/vader.png';
import Planet from '../../../assets/images/elements/planet.png';

let TextContent = `
<h3>Lucas ipsum dolor sit amet luke sidious jango cade mace palpatine jawa wookiee wookiee kashyyyk. Dantooine calrissian r2-d2 calamari coruscant skywalker ewok. Darth fett moff endor twi'lek windu obi-wan luuke. Alderaan hutt hoth moff zabrak moff organa calamari. Ackbar mustafar wedge padmé mandalorians solo secura moff jar. Jawa luuke hutt organa jango jinn. Boba jabba kenobi moff luuke qui-gonn thrawn. Twi'lek yoda mace luke vader boba. Mace kessel darth antilles jabba. Luke hoth organa leia anakin skywalker leia ponda.
</h3>
<h1> 
.
.
.
</h1>
<h3>
Moff ahsoka yavin calamari. Chewbacca skywalker yoda organa kit organa. Hutt hutt twi'lek binks. Amidala darth lando mon. Grievous solo secura mandalore bespin chewbacca sebulba cade. Gamorrean palpatine organa organa yoda hutt antilles. C-3p0 luke skywalker luke mara mara gonk antilles gamorrean. Mara moff wookiee jinn dantooine skywalker qui-gon. Kashyyyk c-3po watto organa. Droid tusken raider aayla moff thrawn darth tusken raider. Binks cade antilles ahsoka. Yoda c-3p0 dantooine antilles secura organa calamari.
</h3>
`

let HomeSectioTwo = `
<section href="#section-two" class="background--two" style="background-image: url(${background2})">
   <div class="container">
   <div class="block-section-two">
     <img src="${darthvader}" alt="Vader" width="300px" heigth="auto"/>
     <div class="text-block--two">
       <p>
       ${TextContent}
   </p>
  </div>
 </div>
 <div class="footer-contain">
   <p>
     Star wars  -  este é um exemplo criado para os Alunos Gama Academy
     Módulo de boas práticas.
   </p>
   <div class="img-footer">
     <img src="${Planet}" alt="planet" heigth="100px" width="190px"/>
   </div>
</div>
</section>

`

export default HomeSectioTwo