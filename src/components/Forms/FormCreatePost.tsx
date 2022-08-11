import { Button, Cards, Input, RichInput } from "components";

export function FormCreatePost() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Cards css="w-200" >
                <form method="POST">
                    <div className="m-5 w-full">
                        <label className="font-bold">Title </label>
                        <Input css="w-screen" placeholder="Titulo da noticia" id="title" />
                    </div>
                    <div className="m-5">
                        <label>Message</label>
                        <RichInput css="bg-white" />
                    </div>
                    <div className="m-5">
                        <label className="font-bold">Image </label>
                        <Input placeholder="Image" id="image" type="file" />
                    </div>
                    <div className="m-5 text-center">
                        <Button>Cadastrar</Button>
                    </div>
                </form>
            </Cards>
        </div>
    )
}