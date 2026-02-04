import { Card, Container, Row, Col, Image } from "react-bootstrap"
import spidermanImage from "../assets/images/superhero/spiderman.jpg"
import ironmanImage from "../assets/images/superhero/ironman.jpg"
import captainamericaImage from "../assets/images/superhero/captainamerica.jpg"
import blackphanterImage from "../assets/images/superhero/blackpanther.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import aquamanImage from "../assets/images/superhero/aquaman.jpg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={spidermanImage} alt="Shelter Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                    <Card.Title className="text-center">Spider-Man: No Way Home</Card.Title>
                                    <Card.Text className="text-left synopsis">
                                        Identitas Spider-Man Peter kebongkar, mantra Doctor Strange salah, multiverse terbuka, villain lama datang, Peter harus selametin semua orang yang disayang sambil hadapi kekacauan terbesar.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col><Col md={4} className="movieWrapper" >
                        <Card className="movieImage">
                            <Image src={ironmanImage} alt="Shelter Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                    <Card.Title className="text-center">Black Panther</Card.Title>
                                    <Card.Text className="text-left synopsis">
                                        T'Challa pulang ke Wakanda setelah ayahnya meninggal, naik tahta jadi raja dan Black Panther, tapi tiba-tiba muncul tantangan besar dari musuh lama yang bikin dia harus putuskan nasib negara tersembunyi itu dan dunia di luar sana.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImage">
                            <Image src={captainamericaImage} alt="Shelter Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                    <Card.Title className="text-center">Iron Man 3</Card.Title>
                                    <Card.Text className="text-left synopsis">
                                        Tony Stark trauma berat pasca Avengers, rumahnya hancur gara-gara ancaman Mandarin, dia tanpa suit harus balas dendam sambil nemuin jawaban: apakah manusia yang bikin suit, atau suit yang bikin manusia.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImage">
                            <Image src={blackphanterImage} alt="Shelter Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                    <Card.Title className="text-center">Captain America: Civil War</Card.Title>
                                    <Card.Text className="text-left synopsis">
                                        Tim Avengers pecah gara-gara perjanjian pemerintah yang bikin superhero harus dikontrol, Captain America bela Bucky yang dituduh teroris, Iron Man ngejar balas dendam, akhirnya jadi perang saudara epik antar pahlawan yang lo kenal semua.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImage">
                            <Image src={batmanImage} alt="Shelter Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                    <Card.Title className="text-center">Aquaman</Card.Title>
                                    <Card.Text className="text-left synopsis">
                                        Arthur Curry, pewaris setengah manusia Atlantis, gabung Mera cari trident kuno buat cegah perang saudara adiknya Orm yang mau serang daratan—petualangan bawah laut epik penuh visual gila dan pertarungan raja-raja samudra.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImage">
                            <Image src={aquamanImage} alt="Shelter Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                    <Card.Title className="text-center">The Dark Knight Rises</Card.Title>
                                    <Card.Text className="text-left synopsis">
                                        Delapan tahun setelah chaos Joker, Bruce Wayne yang rusak dan pensiun dipaksa balik jadi Batman gara-gara Bane yang brutal hancurkan Gotham, ambil kendali kota, dan ancam bom nuklir—Bruce harus hadapi musuh terkuat sekaligus masa lalunya buat selametin kota yang dia cintai.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Superhero 