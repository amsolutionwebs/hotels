import React from 'react';
import { Phone, Mail, MapPin, Star } from 'lucide-react';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RoomCard from './components/RoomCard';
import { FaWifi, FaParking, FaHeadset, FaRupeeSign, FaBath, FaUtensils, FaConciergeBell, FaCog } from 'react-icons/fa';


function App() {
  const heroSlides = [
    {
      url: "https://victoriahotelofficial.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-09-30-at-10.28.56-PM.jpeg",
      title: "Welcome To Victoria Hotel",
      subtitle: "Enjoy the delicacies of our on-site restaurant, which deftly blends traditional Odisha flavors with contemporary flair."
    },
    {
      url: "https://victoriahotelofficial.com/wp-content/uploads/2024/10/Untitled-design-13.png",
      title: "Luxury Accommodations",
      subtitle: "Unwind in style and comfort"
    },
    {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80",
      title: "Exceptional Service",
      subtitle: "Creating memorable experiences"
    }
  ];

  const facilities = [
    { icon: <FaWifi />, label: 'Free Wifi' },
    { icon: <FaParking />, label: 'Parking' },
    { icon: <FaHeadset />, label: '24/7 Support' },
    { icon: <FaRupeeSign />, label: 'Best Price' },
    { icon: <FaCog />, label: 'Laundry' },
    { icon: <FaBath />, label: 'Bathtub' },
    { icon: <FaUtensils />, label: 'Best Meal' },
    { icon: <FaConciergeBell />, label: 'Room Service' },
  ];

  const rooms = [
    {
      title: "ROYAL-EXCLUSIVE AC QUADRUPLE",
      price: "₹7450",
      image: "https://victoriahotelofficial.com/wp-content/uploads/2024/10/2.png",
      features: ["Bed: 2 Double Bed | Occupancy: 4 Adult Location: Front Sea facing with terrace decorated balcony - 4th Floor Room Size (Room With Toilet): 424 SQFT"]
    },
    {
      title: "ROYAL-EXCLUSIVE AC QUADRUPLE",
      price: "₹7450",
      image: "https://victoriahotelofficial.com/wp-content/uploads/2024/10/1.png",
      features: ["Bed: 2 Double Bed | Occupancy: 4 Adult Location: Sea facing with terrace decorated balcony - 4th Floor Room Size (Room With Toilet): 870 SQFT"]
    },
    {
      title: "ROYAL-FAMILY ROOM-AC 5 BED",
      price: "₹7050",
      image: "https://victoriahotelofficial.com/wp-content/uploads/2024/10/3.png",
      features: ["Bed: 5 Bed | Occupancy: 5 Adult Location: Partial Sea facing with balcony - 3rd Floor Room Size (Room With Toilet): 411 SQFT etc faciltities"]
    },
    {
      title: "HERITAGE DOUBLE BED",
      price: "₹6550",
      image: "https://victoriahotelofficial.com/wp-content/uploads/2024/10/4.png",
      features: ["Bed: 1 Double Bed | Occupancy: 2 Adult Location: Front Sea Facing Without Balcony - 1st, 2nd Floor) Room Size (Room With Toilet) : 301 SQFT"]
    },
    {
      title: "SUPERIOR FAMILY",
      price: "₹5550",
      image: "https://victoriahotelofficial.com/wp-content/uploads/2024/10/6.png",
      features: ["Bed: 2 Double Bed | Occupancy: 4 Adult Location: Side Sea Facing With Balcony - Ground Floor Room Size (Room With Toilet): 272 SQFT"]
    },
    {
      title: "SUPERIOR FAMILY",
      price: "₹5550",
      image: "https://victoriahotelofficial.com/wp-content/uploads/2024/10/5.png",
      features: ["Bed : 2 Double Bed | Occupancy: 4 Adult Location: Side Sea facing with Balcony - First Floor Room Size (Room With Toilet): 272 SQFT ect."]
    },
    {
      title: "KING/QUEEN",
      price: "₹750",
      image: "https://victoriahotelofficial.com/wp-content/uploads/2024/10/7.png",
      features: ["Bed: 1 Double Bed | Occupancy: 2 Adult Location: Front Sea Facing With Balcony - 2nd Floor Room Size (Room With Toilet): 331 SQFT"]
    },
    {
      title: "PREMIUM FAMILY",
      price: "₹6550",
      image: "https://victoriahotelofficial.com/wp-content/uploads/2024/10/9.png",
      features: ["Bed: 2 Double Bed | Occupancy: 4 Adult Location: Front Sea Facing with balcony - 1st or 2nd Floor Room Size (Room With Toilet): 303"]
    },
    {
      title: "PREMIUM FAMILY",
      price: "₹5650",
      image: "https://victoriahotelofficial.com/wp-content/uploads/2024/10/9.png",
      features: ["Bed: 2 Double Bed | Occupancy: 4 Adult Location: Sea Facing with balcony - Ground Floor Room Size (Room With Toilet): 303 SQFT"]
    },
    {
      title: "DELUXE DOUBLE BED",
      price: "₹3250",
      image: "https://victoriahotelofficial.com/wp-content/uploads/2024/10/10.png",
      features: ["Bed: 1 Double Bed | Occupancy: 2 Adult Location: Side Sea Facing - 1st Floor Room Size (Room With Toilet): 157 SQFT"]
    },
    {
      title: "DELUXE THREE BED",
      price: "₹4550",
      image: "https://victoriahotelofficial.com/wp-content/uploads/2024/10/11.png",
      features: ["Bed: Triple Bed | Occupancy: 3 Adult Location: Front sea facing - 1st floor Room Size (Room With Toilet): 246 SQFT"]
    },
    {
      title: "DELUXE THREE BED",
      price: "₹4550",
      image: "https://victoriahotelofficial.com/wp-content/uploads/2024/10/12.png",
      features: ["Bed: Triple Bed | Occupancy: 3 Adult Location: Front sea facing - 2nd floor Room Size (Room With Toilet): 246 SQFT"]
    }
  ];

  const gallery = [
    "https://victoriahotelofficial.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-09-30-at-10.28.57-PM-2-1.jpeg",
    "https://victoriahotelofficial.com/wp-content/uploads/2024/10/Untitled-design-13.png",
    "https://victoriahotelofficial.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-09-30-at-10.28.56-PM.jpeg",
    "https://victoriahotelofficial.com/wp-content/uploads/2024/10/images-12.jpeg",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1000",
    "https://victoriahotelofficial.com/wp-content/uploads/2024/10/images-9.jpeg",
  ];

  return (
    <div className="relative">
      <Navbar />

      <section id="home" className="relative h-[100vh]">
        <ImageSlider images={heroSlides} />
      </section>

      <section id="about" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif mb-6">About Our Hotel</h2>
              <p className="text-gray-600 mb-6">
              In the heart of Puri, Odisha, lies the elegant and tranquil Victoria Hotel Official. Our establishment ensures that guests have an unforgettable stay by offering a distinctive fusion of contemporary comfort and seaside elegance.
              <br />
              Enjoy the delicacies of our on-site restaurant, which deftly blends traditional Odisha flavors with contemporary flair. The Victoria Hotel Official in the energetic city of Puri is more than simply a place to sleep; it’s an excursion in coastal sophistication and unrivaled hospitality.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {["5-Star Rating", "24/7 Service", "Free Wifi", "Best Meal"].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Star className="text-yellow-400 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 sm:h-96 mt-8 md:mt-0">
              <img
                src="https://victoriahotelofficial.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-09-30-at-10.28.57-PM-1024x576.jpeg"
                alt="Hotel lobby"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>


        <div className="pt-16 flex flex-col items-center py-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-center mb-8 sm:mb-12">Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-4 rounded-lg ${
                  index % 2 === 0 ? 'bg-orange-500' : 'bg-orange-300'
                } text-white text-center`}
              >
                <div className="text-3xl mb-2">{facility.icon}</div>
                <p className="font-semibold">{facility.label}</p>
              </div>
            ))}
          </div>
        </div>


      </section>

     

      <section id="rooms" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-center mb-8 sm:mb-12">Our Rooms</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-center mb-8 sm:mb-12">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-4 text-gray-600 flex-shrink-0" />
                  <span>+91 8346848693</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4 text-gray-600 flex-shrink-0" />
                  <span>info@grandhotel.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-4 text-gray-600 flex-shrink-0" />
                  <span>123 Luxury Avenue, City Center</span>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md shadow-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

          </section>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
  <div className="w-full h-96 md:h-[450px]">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.0676961289782!2d85.81837778885499!3d19.794726899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c424a7ad6d03%3A0x97a8790938d82117!2sVictoria%20Club%20Hotel!5e0!3m2!1sen!2sin!4v1731248821513!5m2!1sen!2sin" 
      className="w-full h-full border-0" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</section>


      <Footer />
    </div>
  );
}

export default App;