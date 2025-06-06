import React, { useState } from 'react';

const VideoConverter = () => {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [downloadLink, setDownloadLink] = useState("");
    const [error, setError] = useState("");
    const apiKey = "47d04ba1b8mshb0310ce1ae30157p1e4be2jsnf6968e96e5e8";

    const handleConvert = async () => {
        if (!url) return;
        setLoading(true);
        setError("");
        try {
            const response = await fetch(`https://youtube-mp310.p.rapidapi.com/download/mp3?url=${encodeURIComponent(url)}`, {
                headers: {
                    'X-RapidAPI-Key': apiKey,
                },
            });
            if (!response.ok) {
                throw new Error('URL non valide');
            }
            const data = await response.json();
            setDownloadLink(data.downloadUrl);
        } catch (error) {
            console.error("Erreur lors de la conversion", error);
            setError("URL non valide");
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-10">
            <h1 className="text-2xl p-[10px] font-bold mb-4 text-indigo-500">YouTube <span className='text-red-500'> MP3</span> Converter</h1>
            <div className='text-xm max-w-4xl text-center p-10 m-[25px] bg-gray-800 text-white rounded-lg shadow-2xl md:text-2xl'>
                YouTube MP3 Converter est un outil en ligne rapide et simple
                permettant de convertir des vidéos YouTube en fichiers MP3.
                Il suffit d'entrer l'URL d'une vidéo YouTube, de cliquer sur
                "Convertir" et d'obtenir un lien de téléchargement du fichier
                audio. Conçu avec une interface sombre et élégante, ce service
                est optimisé pour une utilisation fluide et intuitive. 🚀
            </div>
            <input
                type="text"
                placeholder="Entrez l'URL YouTube"
                className="w-full max-w-md p-2 rounded bg-gray-800 text-white border border-gray-700 shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button
                onClick={handleConvert}
                className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:bg-green-600"
                disabled={loading || !url}
            >
                {loading ? "Conversion en cours..." : "Convertir"}
            </button>
            {error && (
                <div className="mt-4 text-red-500">
                    {error}
                </div>
            )}
            {downloadLink && (
                <div className="mt-4">
                    <a href={downloadLink} className="text-green-400 underline" target="_blank" rel="noopener noreferrer">
                        Télécharger MP3
                    </a>
                </div>
            )}
        </div>
    );
};

export default VideoConverter;