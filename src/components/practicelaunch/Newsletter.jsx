const Newsletter = () => {
  return (
    <section className="mb-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Healthcare Billing Insights</h2>
          <p className="text-base mb-8 opacity-90">
            Get expert tips on medical billing, revenue cycle management, and practice optimization delivered to your inbox.
          </p>
          <div className="flex gap-4 max-w-lg mx-auto flex-wrap justify-center">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 min-w-[250px] px-5 py-4 rounded-lg border-0 text-base text-gray-900"
            />
            <button className="px-8 py-4 bg-green-600 text-white rounded-lg text-base font-semibold hover:bg-green-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;