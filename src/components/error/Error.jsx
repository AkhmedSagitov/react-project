

function Error({ errors, storePost }) {

    return (
        <>
            <div className="mx-auto w-1/2">
                {errors.length > 0 && (
                    <div className="mb-4 text-red-500">
                        {errors.map((e, i) => (
                            <div key={i}>{e.message}</div>
                        ))}
                    </div>
                )}
                <a
                    onClick={(e)=> storePost(e)}
                    className="inline-block px-3 py-2 text-white bg-sky-600 border border-sky-700 mb-4" href="#">Store</a>
            </div>
        </>
    )
}

export default Error
