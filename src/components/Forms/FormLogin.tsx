import { Button, Cards, Input } from "components";

export function FormLogin() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Cards >
                <form method="POST">
                    <div className="mt-3 text-center">
                        <h2 className="font-bold text-3xl text-green-600">Login</h2>
                    </div>
                    <div className="mt-6">
                        <Input placeholder="Digite seu username" id="username" />
                    </div>
                    <div className="mt-4">
                        <Input placeholder="Digite sua senha" id="password" />
                    </div>
                    <div className="mt-4 text-center">
                        <Button>Login</Button>
                    </div>
                </form>
            </Cards>
        </div>
    )
}