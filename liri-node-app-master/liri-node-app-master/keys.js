console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.ombd = {
    id: process.env.ombd_id,
};

exports.bandsinTown ={
    id: process.env.bandsinTown_id,
};