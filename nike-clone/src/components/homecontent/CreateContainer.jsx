import React, {useState} from 'react'
import Homenavbar from './Homenavbar'
import {motion} from 'framer-motion'
import {
    MdFastfood,
    MdCloudUpload,
    MdDelete,
    MdFoodBank,
    MdAttachMoney
} from 'react-icons/md';
import {categories} from '../../utils/data';
import Loader from './Loader';
import {deleteObject, getDownloadURL, ref, uploadBytesResumable} from "firebase/storage"
import {storage} from '../../../firebase.config';
import {getAllShoeItems, saveItem} from '../../utils/FirebaseFunction';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';

const CreateContainer = () => {

    const [title, setTitle] = useState("")
    const [description, setDescriptions] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState(null);
    const [imageAsset, setImageAsset] = useState(null);

    const [fields, setFields] = useState(false)
    const [alertStatus, setAlerStatus] = useState("danger");
    const [msg, setMsg] = useState(null);
    const [isLoading, setIsloading] = useState(false)
    const [{ shoeItems }, dispatch] = useStateValue();

    const uploadImage = (e) => {
        setIsloading(true);
        const imageFile = e.target.files[0];
        const storageRef = ref(storage, `Images/${
            Date.now()
        }-${
            imageFile.name
        }`);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        uploadTask.on("state_changed", (snapshot) => {
            const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, (error) => {
            console.log(error);
            setFields(true)
            setMsg("Erroe while uploading")
            setAlerStatus("danger")
            setTimeout(() => {
                setFields(false)
                setIsloading(false)
            }, 3000);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                setImageAsset(downloadURL)
                setIsloading(false)
                setFields(true);
                setMsg("Image uploaded succefully")
                setAlerStatus("success")
                setTimeout(() => {
                    setFields(false)
                }, 4000);
            })
        })
    }

    const deleteImage = () => {
        setIsloading(true)
        const deleteRef = ref(storage, imageAsset);
        deleteObject(deleteRef).then(() => {
            setImageAsset(null)
            setIsloading(false)
            setFields(true);
            setMsg("Image deleted succefully")
            setAlerStatus("success")
            setTimeout(() => {
                setFields(false)
            }, 3000);
        })
    }

    const saveDetails = () => {
        setIsloading(true)
        try {
            if ((!title || !description || !imageAsset || !price || !category)) {
                setFields(true)
                setMsg("Required filed must be filled")
                setAlerStatus("danger")
                setTimeout(() => {
                    setFields(false)
                    setIsloading(false)
                }, 3000);
            } else {
                const data = {
                    id: `${
                        Date.now()
                    }`,
                    title: title,
                    imageURL: imageAsset,
                    category: category,
                    description: description,
                    price: price,
                    qty: 1
                }
                saveItem(data)
                setIsloading(false)
                setFields(true);
                setMsg("Data Upleaded.. succefully")
                clearData()
                setAlerStatus("success")
                setTimeout(() => {
                    setFields(false)
                }, 3000);
            }

        } catch (error) {
            console.log(error);
            setFields(true)
            setMsg("Error while uploading")
            setAlerStatus("danger")
            setTimeout(() => {
                setFields(false)
                setIsloading(false)
            }, 3000);
        }
        fetchData();
    }

    const clearData = () => {
        setTitle("")
        setImageAsset(null);
        setDescriptions("")
        setPrice("")
        setCategory("Select a category")
    }


    const fetchData = async () => {
        await getAllShoeItems().then(data => {
          dispatch({
            type: actionType.SET_SHOE_ITEMS, 
            shoeItems : data
          })
        })
      }

    return (
        <div>
            <Homenavbar/>
            <div className='w-full min-h-screen flex items-center justify-center'>
                <div className='w-[90%] md:w-[75%] border border-gray-200 rounded-lg p-4 flex flex-col
                                                                                   items-center justify-center'>
                    {
                    fields && (
                        <motion.p initial={
                                {opacity: 0}
                            }
                            animate={
                                {opacity: 1}
                            }
                            exit={
                                {opacity: 0}
                            }
                            className={
                                `w-full p-2 rounded-lg text-center text-lg font-semibold ${
                                    alertStatus === "danger" ? 'bg-red-400 text-red-800' : 'bg-emerald-400 text-emerald-800'
                                }`
                        }>
                            {msg} </motion.p>
                    )
                }

                    <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
                        <MdFastfood className='text-xl text-gray-700'/>
                        <input type="text" required
                            value={title}
                            placeholder='give me a title..'
                            onChange={
                                (e) => setTitle(e.target.value)
                            }
                            className='w-full h-full text-lg bg-transparentr font-semibold outline-none border-none
                                                                                                                   placeholder:text-gray-500 text-gray-500
                                                                                                                 '/>
                    </div>

                    <div className='w-full'>
                        <select onChange={
                                (e) => setCategory(e.target.value)
                            }
                            className='outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer
                                                                                                                  gap-4'>
                            <option value="other" className="bg-white">Select Category</option>
                            {
                            categories && categories.map((item, index) => (
                                <option key={
                                        item.id
                                    }
                                    className='text-base border-0 outline-none capitalize bg-white text-gray-700'
                                    value={
                                        item.urlParamName
                                }>
                                    {
                                    item.name
                                } </option>
                            ))
                        } </select>
                    </div>

                    {/* Image upload */}
                    <div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225
                                                                                                   md:h-420 cursor-pointer rounded-lg'>
                        {
                        isLoading ? <Loader/>: <> {
                            !imageAsset ? (
                                <>
                                    <label className='w-full h-full flex flex-col justify-center items-center
                                                                                                                                                           cursor-pointer'>
                                        <div className='w-full h-full gap-2 flex flex-col justify-center items-center '>
                                            <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700'/>
                                            <p className='text-gray-500 text-3xl hover:text-gray-700'>Cick here to uplaod</p>
                                        </div>
                                        <input className='w-0 h-0' type="file" name="uploadimage" accept='image/*'
                                            onChange={uploadImage}/>
                                    </label>
                                </>
                            ) : (
                                <>
                                    <div className='relative h-full'>
                                        <img className='w-full h-full object-cover'
                                            src={imageAsset}
                                            alt="uploadedimage"/>
                                        <button type="button" className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500
                                                                                                                                                                          text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out'
                                            onClick={deleteImage}>
                                            <MdDelete className='text-white'/>
                                        </button>
                                    </div>
                                </>
                            )
                        } </>
                    } </div>
                    <div className='w-full flex flex-col md:flex-row items-center gap-3'>
                        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
                            <MdFoodBank className='text-gra-700 text-2xl '/>
                            <input type="text"
                                value={description}
                                onChange={
                                    (e) => setDescriptions(e.target.value)
                                }
                                required
                                placeholder='description'
                                className='w-full h-full text-lg bg-transparent
                                                                                                    outline-none border-none placeholder:text-gray-400'/>
                        </div>
                        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
                            <MdAttachMoney className='text-gra-700 text-2xl '/>
                            <input type="text"
                                value={price}
                                onChange={
                                    (e) => setPrice(e.target.value)
                                }
                                required
                                placeholder='price'
                                className='w-full h-full text-lg bg-transparent
                                                                                                    outline-none border-none placeholder:text-gray-400'/>
                        </div>
                    </div>

                    <div className='flex items-center w-full mt-4'>
                        <button type='button' className='ml-0 md:ml-auto  w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2
                                                        rounded-lg text-lg text-white font-semibold'
                            onClick={saveDetails}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateContainer
