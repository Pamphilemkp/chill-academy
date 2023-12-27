import Image from 'next/image';

const Services = () =>{
   return (
    <section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100 bg-gradient-to-r from-purple-500 to-blue-800 border border-purple-600 text-blue-800">
     <div className="container p-4 mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white mb-10 text-white">Our services statistics</h2>
    </div>
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 bg-blue-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
				<Image
                      className=" rounded-full mb-10"
                      src="/images/trolley.gif"
                      alt="shopping trolly image gif"
                      width={1000}
                      height={1000}
                    />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">AVG. 200</p>
				<p className="capitalize"> Projects Orders/Year</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 bg-blue-100 ">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
					<path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
					<path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
					<polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
					<polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
				</svg>
				
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">+ 10</p>
				<p className="capitalize">New customers/Month</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 bg-blue-100 ">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
				 <Image
					  className="rounded-full mb-10"
					  src="/images/compter.gif"
					  alt="compter image gif"
					  width={1000}
					  height={1000}
					   />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">172%</p>
				<p className="capitalize">Growth</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 bg-blue-100 ">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
				 <Image
						   className=" rounded-full mb-10"
						   src="/images/bounceclick.gif"
						   alt="click bounce image gif"
						   width={1000}
						   height={1000}
					   />	  
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leadi">+17%</p>
				<p className="capitalize">Bounce rate</p>
			</div>
		</div>
	</div>
</section>
   )
}

export default Services;