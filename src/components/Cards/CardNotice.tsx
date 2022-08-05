export function CardNotice() {
    return (
        <div className="bg-slate-100 w-screen h-80 shadow-md p-5">
            <div className="flex flex-row">
                <div className="">
                    <div className="">
                        <img className="rounded-xl w-100" src="./images/fut.jpg" alt="image" />
                    </div>
                </div>

                <div className="flex flex-col ml-10">

                    <div className="block">
                        <h2 className="text-xl font-bold">What is Lorem Ipsum?</h2>
                    </div>

                    <div className="mt-7">
                        <p className="font-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                            has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
                    </div>
                    <div className="mt-5"><p className="text-slate-400 ">Author <span className="italic">date</span> </p></div>

                </div>

            </div>

        </div>
    )
}