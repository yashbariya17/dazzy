const ViewMore = ({ selectedProduct, setSelectedProduct }: { selectedProduct: any, setSelectedProduct: (val: any) => void }) => {

    return (
        <>
            {selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-400/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-6 relative grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
                            onClick={() => setSelectedProduct(null)}
                        >
                            ✕
                        </button>

                        {/* Left: Image */}
                        <div className="flex items-center justify-center">
                            <img
                                src={selectedProduct.url}
                                alt={selectedProduct.name}
                                className="w-full h-auto max-h-[400px] object-contain"
                            />
                        </div>

                        {/* Right: Info */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                            <p className="text-gray-600">Description goes here. Add more details if needed.</p>
                            <button className="px-4 py-2 bg-[#eb0029] text-white rounded-lg hover:bg-red-700 transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ViewMore