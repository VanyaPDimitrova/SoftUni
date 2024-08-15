import { useState } from 'react';
import { createNewCategory } from '../../requests/categories-requests';

// teacher@abv.bg 
function CreateCategory({ closeModal, setCategories}) {
    const initialValue = { 
        category: '', 
        description: '',
    };
    const [values, setValues] = useState(initialValue);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        createNewCategory(values)
            .then(data => {                
                setCategories(categories => ({
                    ...categories,
                    data,
                }));
                closeModal();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="containerDelete">
        

        <form className={styles.login} onSubmit={submitHandler}>
                <div className={styles.data}>
                    <div className="field">
                        <label htmlFor="category">Category name: </label>
                        <input 
                            type="category" 
                            id='category' 
                            name='category'
                            value={values.category}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="description">Description: </label>
                        <input 
                            type="description"
                            id='description' 
                            name='description' 
                            value={values.description}
                            onChange={changeHandler}
                        />
                    </div>

                </div>


                <div className={styles.buttons}>
                    <button type="submit" className={styles.submitBtn}>Create</button>
                    <button className='cancelBtn' onClick={closeModal}>Cancel</button>
                </div>
            </form>

    </div>
    );
}

export default CreateCategory;
