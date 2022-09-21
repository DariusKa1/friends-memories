import postModel from "../models/post.model.js"

export const getPosts = async (req, res) => {
    await postModel.find()
        .then(data => {
            data.length > 0 ? 
            res.status(200).json({success: true, posts: data}) :
            res.status(204).json({success: true, message: 'no content'});
        })
        .catch(error => res.status(404).json({success: false, message: error.message}));
};

export const createPost = async (req, res) => {
    const post = new postModel({
        title: req.body.title,
        message: req.body.message,
        creator: req.body.creator,
        tags: req.body.tags
    });

    await post.save()
        .then(post => res.status(201).json({success: true, post: post}))
        .catch(error => res.status(404).json({success: false, message: error.message}));
};

export const deleteByID = async (req, res) => {
    await res.post.remove()
        .then(() => res.status(200).json({success: true, message: `Post with title: "${res.post.title}" was deleted`}))
        .catch(error => res.status(400).json({success: false, message: error.message}));
};

export const getPostByID = async (req, res) => {
    res.post &&
    res.status(200).json({success: true, post: res.post});
}

export async function doesPostExist (req, res, next){
    const id = req.params.id;
    await postModel.findById(id)
        .then(findedPost => res.post = findedPost)
        .catch(error => res.status(400).json({success: false, error: `No post with id: ${error.value}`}));
    next();
}