import Music from "../models/Model.js";

// getMusics function to get all Musics
export const getMusics = async (req, res, next) => {
  let musics;
  try {
    musics = await Music.find({});
    if (!musics) {
      res.status(404).json({ message: "No music found." });
      return;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
    return;
  }

  res.status(200).json({
    musics: musics.map((music) => music.toObject({ getters: true })),
  });
};

export const addMusic = async (req, res) => {
  console.log(req.body);
  const newMusicData = req.body;
  const randomNumber = Math.floor(Math.random() * 100000) + 1;
  newMusicData.id = randomNumber;
  console.log(req.body);
  const newMusic = new Music(newMusicData);
  try {
    const savedMusic = await newMusic.save();
    res.status(201).json(savedMusic);
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

export const getSearchResults = async (req, res) => {
  const query = req.query.q;
  try {
    const results = await Music.find({ title: new RegExp(query, "i") });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

//getUserById function to retrieve user by id
// export const getUserById  = asyncHandler(async(req, res) => {
//     const user = await User.findById(req.params.id)

//     //if user id match param id send user else throw error
//     if(user){
//         res.json(user)
//     }else{
//         res.status(404).json({message: "User not found"})
//         res.status(404)
//         throw new Error('User not found')
//     }
// })
