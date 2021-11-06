import { useState, useEffect, useRef } from 'react';
import * as mobilenet from "@tensorflow-models/mobilenet";

function App() {
    const [isModelLoading, setIsModelLoading] = useState(false)
    const [model, setModel] = useState(null)
    const [imageURL, setImageURL] = useState(null);
    const [results, setResults] = useState([])

    const imageRef = useRef()
    const textInputRef = useRef()
    const fileInputRef = useRef()

    const loadModel = async () => {
        setIsModelLoading(true)
        try {
            const model = await mobilenet.load()
            setModel(model)
            setIsModelLoading(false)
        } catch (error) {
            console.log(error)
            setIsModelLoading(false)
        }
    }

    const uploadImage = (e) => {
        const { files } = e.target
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0])
            setImageURL(url)
        } else {
            setImageURL(null)
        }
    }

    const identify = async () => {
        textInputRef.current.value = ''
        const results = await model.classify(imageRef.current)
        setResults(results)
    }

    const triggerUpload = () => {
        fileInputRef.current.click()
    }

    useEffect(() => {
        loadModel()
    }, [])



    if (isModelLoading) {
        return <center><h2>Cargando..</h2></center>
    }

    return (
        <div className="App">
            <div className='inputHolder'>
                <input type='file' accept='image/*' capture='camera' className='uploadInput' onChange={uploadImage} ref={fileInputRef} />
                <button className='uploadImage' onClick={triggerUpload}>Subir imagen</button>
                <input type="hidden"  ref={textInputRef} />
            </div>
            <div className="mainWrapper">
                <div className="mainContent">
                    <div className="imageHolder">
                        {imageURL && <img src={imageURL} crossOrigin="anonymous" ref={imageRef} />}
                    </div>
                    {results.length > 0 && <div>
                        {results.map((result, index) => {
                            return (
                                    console.log("Categoria: "+result.className+" ||Porcentaje: "+(result.probability * 100).toFixed(2))
                            )
                        })}
                    </div>}
                </div>
                {imageURL && <button className='button buttonSubir' onClick={identify}>Enviar</button>}
            </div>
        </div>
    );
}

export default App;
