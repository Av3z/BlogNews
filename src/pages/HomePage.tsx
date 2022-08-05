import { Nav, Background, CardNotice, Container } from "components";

export function HomePage() {
    return (
        <>
            <Background >
                <Nav />
                <div className="flex items-center justify-center">
                    <Container>
                        <CardNotice />
                    </Container>
                </div>

                <div className="flex items-center justify-center">
                    <Container>
                        <CardNotice />
                    </Container>
                </div>
            </Background>
        </>
    );
}