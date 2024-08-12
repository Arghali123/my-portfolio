import Button from './button';
import Img from './Photos/ronaldo.jpg'

const Hero = () => {
 
  return (
    <div class=" justify-center">
      
      <div class="flex justify-center items-center">

      <img src={Img} alt='my hero' height="320px" width="200px" class="rounded-full mt-8"/>
      </div>
      <h1 className="text-white font-bold font-mono text-xl ">Hi,I am Ronaldo Suuuu!!😁</h1>
      <h2 className='text-white text-lg'>I am a professional Player</h2>
      <p className='text-red-50 text-justify w-3/4 m-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores repellat beatae non architecto ullam perferendis voluptas maxime praesentium sapiente unde, dicta laborum inventore, voluptatum officiis omnis totam facilis obcaecati, tempore sed animi nam hic. Adipisci maiores fugiat tempora doloremque, doloribus cupiditate at porro quibusdam. Excepturi cum velit ratione quod quaerat?</p>

      <div class="flex justify-center gap-5 mt-5">
        <Button title="Contact Me" type="orange" icon="contact" />

        <Button title="My Projects" type="blue" icon="github" />
      </div>
    </div>
  );
};

export default Hero;