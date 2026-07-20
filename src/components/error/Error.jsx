

function Error({ errors}) {

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
            </div>
        </>
    )
}

export default Error
