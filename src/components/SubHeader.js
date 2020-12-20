import React from 'react';

const SubHeader = () => {
    return(
    <nav class="flex items-center justify-between flex-wrap bg-gray-200 p-3 fixed w-full z-10 pin-t">
		<div class="flex items-center flex-no-shrink text-white mr-6">
			<a class="text-blue-700 no-underline hover:text-white hover:no-underline" href="#">
				<span class="text-2xl pl-2"><i class="em em-grinning"></i>Wisata Indonesia</span>
			</a>
		</div>

		<div class="block lg:hidden">
			<button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

		<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
			<ul class="list-reset lg:flex justify-end flex-1 items-center">
				<li class="mr-3">
					<a class="inline-block  hover:text-grey-lighter hover:text-underline py-2 px-4" href="/">Home</a>
				</li>
				<li class="mr-3">
					<a class="inline-block  py-2 px-4 text-gray-800 no-underline" href="/gallery">Gallery</a>
				</li>
				<li class="mr-3">
					<a class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="#">Most Popular</a>
				</li>
				<li class="mr-3">
					<a class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="#">Blog & News</a>
				</li>
			</ul>
		</div>
	</nav>
    )
}

export default SubHeader;