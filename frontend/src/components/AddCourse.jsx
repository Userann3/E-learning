import React, { useState } from 'react';
import NavigationComponent from './NavigationComponent';
import Footer from './Footer';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function AddCourse() {
    const [currentStep, setCurrentStep] = useState(1); // Track current step
    const [sections, setSections] = useState([]);
    const [courseInfo, setCourseInfo] = useState({
        title: '',
        price: '',
        category: '',
        tags: '',
        description: '',
        benefits: '',
        image: null
    });
    const [errors, setErrors] = useState({});

    // Step 1 Validation
    const validateStep1 = () => {
        const newErrors = {};
        if (!courseInfo.title) newErrors.title = 'Course title is required';
        if (!courseInfo.price) newErrors.price = 'Price is required';
        if (!courseInfo.category) newErrors.category = 'Category is required';
        if (!courseInfo.description) newErrors.description = 'Description is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Step 2 Validation
    const validateStep2 = () => {
        const newErrors = {};
        if (sections.length === 0) newErrors.sections = 'At least one section is required';
        sections.forEach((section, index) => {
            if (!section.title) newErrors[`section-${index}`] = 'Section title is required';
            if (section.subsections.length === 0) newErrors[`section-${index}-subsections`] = 'At least one lecture is required';
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCourseInfoChange = (e) => {
        const { id, value } = e.target;
        setCourseInfo({ ...courseInfo, [id]: value });
    };

    const handleImageChange = (e) => {
        setCourseInfo({ ...courseInfo, image: e.target.files[0] });
    };

    const addSection = () => {
        setSections([...sections, { title: '', subsections: [] }]);
    };

    const updateSectionTitle = (index, title) => {
        const updatedSections = [...sections];
        updatedSections[index].title = title;
        setSections(updatedSections);
    };

    const addSubsection = (sectionIndex) => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].subsections.push({
            title: '',
            video: '',
            playbackTime: { hh: '', mm: '', ss: '' },
            description: ''
        });
        setSections(updatedSections);
    };

    const updateSubsection = (sectionIndex, subIndex, field, value) => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].subsections[subIndex][field] = value;
        setSections(updatedSections);
    };

    const deleteSubsection = (sectionIndex, subIndex) => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].subsections.splice(subIndex, 1);
        setSections(updatedSections);
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const updatedSections = [...sections];
        const [reorderedItem] = updatedSections.splice(result.source.index, 1);
        updatedSections.splice(result.destination.index, 0, reorderedItem);

        setSections(updatedSections);
    };

    const saveCourse = () => {
        if (validateStep1() && validateStep2()) {
            localStorage.setItem('course', JSON.stringify({ courseInfo, sections }));
            alert('Course saved successfully!');
        }
    };

    const loadCourse = () => {
        const savedCourse = JSON.parse(localStorage.getItem('course'));
        if (savedCourse) {
            setCourseInfo(savedCourse.courseInfo);
            setSections(savedCourse.sections);
        }
    };

    const nextStep = () => {
        if (currentStep === 1 && validateStep1()) {
            setCurrentStep(2);
        } else if (currentStep === 2 && validateStep2()) {
            setCurrentStep(3);
        }
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <>
            <NavigationComponent currentPage={"create course"} pageName1={"Create"} pageName2={"Course"}/>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-6">
                <div className="flex space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-[#309255] text-white' : 'bg-gray-300 text-gray-600'}`}>1</div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-[#309255] text-white' : 'bg-gray-300 text-gray-600'}`}>2</div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-[#309255] text-white' : 'bg-gray-300 text-gray-600'}`}>3</div>
                </div>
            </div>

            {/* Step 1: Course Information */}
            {currentStep === 1 && (
                <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md bg-[#e7f8ee] mt-10">
                    <h1 className="text-xl font-bold text-[#309255] capitalize">Course Info</h1>
                    <form>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-[#309255]" htmlFor="title">
                                    Course title
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    value={courseInfo.title}
                                    onChange={handleCourseInfoChange}
                                    className="block w-full px-4 py-2 mt-2 text-[#309255] bg-white border border-[#309255] rounded-md focus:border-[#309255] focus:outline-none focus:ring"
                                />
                                {errors.title && <p className="text-red-500">{errors.title}</p>}
                            </div>
                            <div>
                                <label className="text-[#309255]" htmlFor="price">
                                    Price
                                </label>
                                <input
                                    id="price"
                                    type="text"
                                    value={courseInfo.price}
                                    onChange={handleCourseInfoChange}
                                    className="block w-full px-4 py-2 mt-2 text-[#309255] bg-white border border-[#309255] rounded-md focus:border-[#309255] focus:outline-none focus:ring"
                                />
                                {errors.price && <p className="text-red-500">{errors.price}</p>}
                            </div>
                            <div>
                                <label className="text-[#309255]" htmlFor="category">
                                    Category
                                </label>
                                <input
                                    id="category"
                                    type="text"
                                    value={courseInfo.category}
                                    onChange={handleCourseInfoChange}
                                    className="block w-full px-4 py-2 mt-2 text-[#309255] bg-white border border-[#309255] rounded-md focus:border-[#309255] focus:outline-none focus:ring"
                                />
                                {errors.category && <p className="text-red-500">{errors.category}</p>}
                            </div>
                            <div>
                                <label className="text-[#309255]" htmlFor="tags">
                                    Tag
                                </label>
                                <input
                                    id="tags"
                                    type="text"
                                    value={courseInfo.tags}
                                    onChange={handleCourseInfoChange}
                                    className="block w-full px-4 py-2 mt-2 text-[#309255] bg-white border border-[#309255] rounded-md focus:border-[#309255] focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label className="text-[#309255]" htmlFor="description">
                                    Course short description
                                </label>
                                <ReactQuill
                                    value={courseInfo.description}
                                    onChange={(value) => setCourseInfo({ ...courseInfo, description: value })}
                                    className="bg-white"
                                />
                                {errors.description && <p className="text-red-500">{errors.description}</p>}
                            </div>
                            <div>
                                <label className="text-[#309255]" htmlFor="benefits">
                                    Benefits of the course
                                </label>
                                <ReactQuill
                                    value={courseInfo.benefits}
                                    onChange={(value) => setCourseInfo({ ...courseInfo, benefits: value })}
                                    className="bg-white"
                                />
                            </div>
                            <div>
                                <label className="text-[#309255]" htmlFor="image">
                                    Course Thumbnail
                                </label>
                                <input
                                    id="image"
                                    type="file"
                                    onChange={handleImageChange}
                                    className="block w-full px-4 py-2 mt-2 text-[#309255] bg-white border border-[#309255] rounded-md focus:border-[#309255] focus:outline-none focus:ring"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button
                                type="button"
                                onClick={nextStep}
                                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#309255] rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-600"
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </section>
            )}

            {/* Step 2: Course Builder */}
            {currentStep === 2 && (
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="sections">
                        {(provided) => (
                            <section
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className="max-w-4xl p-6 mx-auto rounded-md shadow-md bg-[#e7f8ee] mt-20"
                            >
                                <h1 className="text-xl font-bold text-[#309255] capitalize">Course Builder</h1>
                                {sections.map((section, sectionIndex) => (
                                    <Draggable key={sectionIndex} draggableId={`section-${sectionIndex}`} index={sectionIndex}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                className="p-4 bg-white rounded-md shadow-md mt-4"
                                            >
                                                <div {...provided.dragHandleProps} className="cursor-move">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter section title"
                                                        value={section.title}
                                                        onChange={(e) => updateSectionTitle(sectionIndex, e.target.value)}
                                                        className="block w-full p-2 border border-gray-300 rounded-md"
                                                    />
                                                    {errors[`section-${sectionIndex}`] && <p className="text-red-500">{errors[`section-${sectionIndex}`]}</p>}
                                                </div>
                                                <button
                                                    onClick={() => addSubsection(sectionIndex)}
                                                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
                                                >
                                                    + Add Lecture
                                                </button>
                                                {section.subsections.map((sub, subIndex) => (
                                                    <div key={subIndex} className="mt-4 p-4 bg-gray-100 rounded-md">
                                                        <input
                                                            type="text"
                                                            placeholder="Lecture Title"
                                                            value={sub.title}
                                                            onChange={(e) => updateSubsection(sectionIndex, subIndex, 'title', e.target.value)}
                                                            className="block w-full p-2 border border-gray-300 rounded-md"
                                                        />
                                                        <input
                                                            type="file"
                                                            onChange={(e) => updateSubsection(sectionIndex, subIndex, 'video', e.target.files[0])}
                                                            className="block w-full mt-2"
                                                        />
                                                        <div className="flex gap-2 mt-2">
                                                            <input
                                                                type="number"
                                                                placeholder="HH"
                                                                value={sub.playbackTime.hh}
                                                                onChange={(e) => updateSubsection(sectionIndex, subIndex, 'playbackTime', { ...sub.playbackTime, hh: e.target.value })}
                                                                className="w-12 p-2 border border-gray-300 rounded-md"
                                                            />
                                                            <input
                                                                type="number"
                                                                placeholder="MM"
                                                                value={sub.playbackTime.mm}
                                                                onChange={(e) => updateSubsection(sectionIndex, subIndex, 'playbackTime', { ...sub.playbackTime, mm: e.target.value })}
                                                                className="w-12 p-2 border border-gray-300 rounded-md"
                                                            />
                                                            <input
                                                                type="number"
                                                                placeholder="SS"
                                                                value={sub.playbackTime.ss}
                                                                onChange={(e) => updateSubsection(sectionIndex, subIndex, 'playbackTime', { ...sub.playbackTime, ss: e.target.value })}
                                                                className="w-12 p-2 border border-gray-300 rounded-md"
                                                            />
                                                        </div>
                                                        <ReactQuill
                                                            value={sub.description}
                                                            onChange={(value) => updateSubsection(sectionIndex, subIndex, 'description', value)}
                                                            className="bg-white mt-2"
                                                        />
                                                        <button
                                                            onClick={() => deleteSubsection(sectionIndex, subIndex)}
                                                            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
                                                        >
                                                            Delete Lecture
                                                        </button>
                                                    </div>
                                                ))}
                                                {errors[`section-${sectionIndex}-subsections`] && <p className="text-red-500">{errors[`section-${sectionIndex}-subsections`]}</p>}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                                <button onClick={addSection} className="mt-4 px-6 py-2 bg-[#309255] text-white rounded-md">
                                    + Create Section
                                </button>
                                <div className="flex justify-between mt-6">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-600"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#309255] rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-600"
                                    >
                                        Next
                                    </button>
                                </div>
                            </section>
                        )}
                    </Droppable>
                </DragDropContext>
            )}

            {/* Step 3: Publish Settings */}
            {currentStep === 3 && (
                <div className="p-4 w-full max-w-lg mx-auto bg-[#e7f8ee] text-[#1d2733] rounded-lg mt-10">
                    <h2 className="text-lg font-semibold mb-3">Publish Settings</h2>
                    <label className="flex items-center space-x-2 mb-4">
                        <input type="checkbox" className="w-4 h-4 text-[#309255] bg-white border-[#309255] rounded focus:ring-[#309255]" />
                        <span>Make this Course Public</span>
                    </label>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={prevStep}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Previous
                        </button>
                        <div className="flex space-x-2">
                            <button
                                type="button"
                                onClick={saveCourse}
                                className="bg-white text-[#309255] px-4 py-2 rounded border border-[#309255]"
                            >
                                Save as a Draft
                            </button>
                            <button
                                type="button"
                                onClick={saveCourse}
                                className="bg-[#309255] text-white px-4 py-2 rounded"
                            >
                                Save and Publish
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer mt={"mt-10"} />
        </>
    );
}