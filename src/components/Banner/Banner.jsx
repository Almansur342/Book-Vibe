const Banner = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 mb-16 rounded-lg max-w-6xl mx-auto">
	<div className="container flex flex-col justify-center p-6 mx-auto py-7  lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-xl lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-5xl mb-12">Books to freshen up your bookshelf</h1>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-[#23BE0A] text-[#FFFFFF]">View The List</a>
				
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="/banner.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
  );
};

export default Banner;