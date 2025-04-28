import Button from "../layouts/Button";
import heroImage from "../assets/images/Hero_Real.jpg";

function Hero() {
  return (
    <div className="relative h-screen w-full bg-black text-white flex items-center justify-start px-8 md:px-20">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      />
      
      {/* Content shifted left */}
      <div className="relative text-left max-w-xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Your PC, Your Rules.
        </h1>
        <Button title="Checkout Now" link="products" />
      </div>
    </div>
  );
}

export default Hero;
