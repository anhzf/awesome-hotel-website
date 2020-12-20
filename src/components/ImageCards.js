import React from 'react';

const ImageCards = () => {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            {/* Images */}
            <img src="https://source.unsplash.com/random" alt="" className="w-full"/>
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2" >
                    Photo by Fahmi Habibi
                </div>     
                <ul>
                    <li>
                        <strong>Views: </strong>
                        4000
                    </li>
                </ul>
            </div>

            {/* Tags */}
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #tag1
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #tag2
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #tag3
                </span>
            </div>
        </div>
    )
}

export default ImageCards;