   {/* Product Image  */}

<section className="bg-white">
  <div className="bg-pink-100 text-center rounded-md py-10 px-4 relative">
    {/* Badges */}
    <span className="absolute top-4 left-4 bg-white text-purple-600 font-bold py-1 px-3 rounded-full shadow">
      ★ Best Seller
    </span>
    <span className="absolute top-4 right-4 bg-white text-purple-600 font-bold py-1 px-3 rounded-full shadow">
      ৪৫% OFF
    </span>

    {/* Product Image */}
    <Image
      className="bg-pink-300 rounded-md mx-auto object-cover"
      src="/images/pa.jpeg"
      alt="Picture of Dress"
      width={600}
      height={300}
    />
  </div>

  {/* Description Box */}
  <div className="container relative mx-auto max-w-2xl bg-white text-center border-2 border-dashed border-purple-300 py-6 px-4 mt-6 rounded-lg shadow-lg">
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-3">
      <span className="text-purple-600 text-xl">💜</span>
    </div>
    <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed">
      আমরা শুধু আপনার সৌন্দর্যের কথাই চিন্তা করছি না, সাথে আপনার
      <span className="text-purple-600 font-bold"> আরামদায়ক বিষয়টাও</span> খেয়াল রাখছি। 
      আপনার সেই আরাম আর সৌন্দর্যের কথা চিন্তা করেই হাজির হয়েছি 
      <span className="text-purple-600 font-bold"> 100% সুতি কটন ড্রেস</span> নিয়ে।
    </p>
  </div>

  {/* Order Button */}
  <div className="bg-white/90 w-full text-center shadow-lg py-6 px-8 mt-4">
    <div className="mx-auto w-full max-w-4xl">
      <button
        type="button"
        className="w-full text-white text-xl bg-purple-700 py-4 rounded-lg hover:bg-purple-800 shadow-lg"
      >
        এখনই অর্ডার করুন →
      </button>
    </div>
  </div>
</section>
