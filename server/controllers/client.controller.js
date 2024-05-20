const {ClientModel} = require('../models/client.model');

module.exports = {
    getAllClients: (req, res) => {
        ClientModel.find({})
        .then (allClients => res.status(200).json({clients: allClients}))
        .catch(err => res.status(400).json({message: "Something went wrong", error: err}))
    },
    getOneClient: (req, res) => {
        ClientModel.findOne({_id: req.params.id})
        .then(oneSingleClient => res.status(200).json({client: oneSingleClient}))
        .catch(err => res.status(400).json({message: "Something went wrong", error: err}))
    },
    createClient: (req, res) => {
        ClientModel.create(req.body)
        .then(newlyCreatedClient => res.status(201).json({client: newlyCreatedClient}))
        .catch(err => res.status(400).json({message: "Something went wrong", error: err}))
    },
    updateOneClientById: (req, res) => {
        ClientModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedClient => res.status(200).json({client: updatedClient}))
        .catch(err => res.status(400).json({message: "Something went wrong", error: err}))
    },
    deleteOneClientById: (req, res) => {
        ClientModel.deleteOne({_id: req.params.id})
        .then(result => res.status(200).json({result: result}))
        .catch(err => res.status(400).json({message: "Something went wrong", error: err}))
    }


}