"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { PiImagesLight } from "react-icons/pi";

// import dynamic from "next/dynamic";
// import { v4 } from "uuid";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // Import syntax highlighter
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // Choose a syntax highlighting theme

const toolbarOptions = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],

    ["link", "image", "video"],
  ],

  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  "indent",
  "link",
  "align",
];

const placeholder = "Description";

function Postpage() {
  const router = useRouter();

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [howManyWidgets, setHowManyWidgets] = useState("");
  const [widgets, setWidgets] = useState("");
  const [madeFor, setMadeFor] = useState("");
  const [designType, setDesignType] = useState("");
  const [howManythemes, setHowManythemes] = useState("");
  const [themes, setThemes] = useState("");

  const [image, setImage] = useState([]);

  // async function createNewPost(e) {
  //   const data = new FormData();
  //   data.set("content", content);

  //   // data.set('file', files[0]);
  //   e.preventDefault();
  //   const response = await fetch("api/email", {
  //     method: "POST",
  //     body: data,
  //   });

  //   console.log(await response.json());
  // }

  // function converToBase(e) {
  //   var reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = () => {
  //     console.log(reader.result);
  //     setImage(reader.result);
  //   };
  //   reader.onerror = (error) => {
  //     console.log(error);
  //   };
  // }

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Process selected files and convert to base64
    const base64Images = [];

    for (const file of selectedFiles) {
      const reader = new FileReader();

      reader.onload = (event) => {
        base64Images.push({
          file,
          base64: event.target.result,
        });

        if (base64Images.length === selectedFiles.length) {
          setImage(base64Images);
        }
      };

      reader.onerror = (error) => {
        console.error("Error converting file to base64:", error);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleTagChange = (e) => {
    setTags(e.target.value.split(",").map((ta) => ta.trim()));
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        content,
        title,
        summary,
        image,
        tags,
        price,
        howManyWidgets,
        widgets,
        madeFor,
        designType,
        howManythemes,
        themes,
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      setContent("");
      setTitle("");
      setSummary("");
      setTags("");

      window.location.reload();
      router.push("/");
    }
  };

  const removeImage = (indexToRemove) => {
    const updateImage = [...image];
    updateImage.splice(indexToRemove, 1);
    setImage(updateImage);
  };

  return (
    <>
      <div className=" max-w-5xl lg:max-w-[550px]  lg:mx-auto mx-auto mt-20 p-5">
        <div>
          {/* {image && <img className="w-32" src={image} alt="" />} */}

          <h3 className="text-3xl uppercase font-bold my-3">Create new Post</h3>

          <label className="text-lg font-bold my-3">Title</label>
          <div>
            <input
              type="text"
              placeholder={"Title"}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="bg-neutral-800/25 my-3 rounded-md p-2 w-full "
            />
          </div>

          <div>
            <label className="text-base font-bold ">Tags</label>

            <input
              type="text"
              placeholder={"tags"}
              value={tags}
              onChange={handleTagChange}
              className="bg-neutral-800/25 my-3 rounded-md p-2 w-full "
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base font-bold my-3 border border-dotted border-neutral-700 h-28 w-full rounded-lg flex flex-col justify-center items-center">
              <Image
                width={10}
                height={10}
                className="w-10"
                src="/img/mag.png"
                alt=""
              />
              <span>Tap to upload images</span>

              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <div className="flex items-center justify-center gap-x-3 ">
              {image.map((image, index) => (
                <div key={index} className="">
                  <Image
                    width={100}
                    height={100}
                    className="w-11 h-11 object-cover rounded-full"
                    src={image.base64}
                    alt={`Image ${index}`}
                  />
                  <button onClick={() => removeImage(index)}>Remove</button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div>
              <label className="text-base font-bold ">Price</label>

              <input
                type="number"
                placeholder={"Price"}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-neutral-800/25 my-3 rounded-md p-2 w-full "
              />
            </div>
            <div>
              <label className="text-base font-bold ">How many Widgets?</label>

              <input
                type="number"
                placeholder={"How many widgets"}
                value={howManyWidgets}
                onChange={(e) => setHowManyWidgets(e.target.value)}
                className="bg-neutral-800/25 my-3 rounded-md p-2 w-full "
              />
            </div>
            <div>
              <label className="text-base font-bold ">Has Widgets?</label>

              <input
                type="text"
                placeholder={"Has Widgets"}
                value={widgets}
                onChange={(e) => setWidgets(e.target.value)}
                className="bg-neutral-800/25 my-3 rounded-md p-2 w-full "
              />
            </div>
            <div>
              <label className="text-base font-bold ">
                Made For Mobile? Desktop??
              </label>

              <input
                type="text"
                placeholder={"Made For"}
                value={madeFor}
                onChange={(e) => setMadeFor(e.target.value)}
                className="bg-neutral-800/25 my-3 rounded-md p-2 w-full "
              />
            </div>

            <div>
              <label className="text-base font-bold ">Design Type?</label>

              <input
                type="text"
                placeholder={"Design Description"}
                value={designType}
                onChange={(e) => setDesignType(e.target.value)}
                className="bg-neutral-800/25 my-3 rounded-md p-2 w-full "
              />
            </div>

            <div>
              <label className="text-base font-bold ">Has Theme?</label>

              <input
                type="text"
                placeholder={"Themes"}
                value={themes}
                onChange={(e) => setThemes(e.target.value)}
                className="bg-neutral-800/25 my-3 rounded-md p-2 w-full "
              />
            </div>
            <div>
              <label className="text-base font-bold ">How Many Theme?</label>

              <input
                type="number"
                placeholder={"Price"}
                value={howManythemes}
                onChange={(e) => setHowManythemes(e.target.value)}
                className="bg-neutral-800/25 my-3 rounded-md p-2 w-full "
              />
            </div>
          </div>
          <textarea
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
            }}
            name="summary"
            cols="30"
            rows="4"
            placeholder="Short summary"
            className="bg-neutral-800/25 my-3 rounded-md p-2 w-full "
          />
          <ReactQuill
            theme="snow"
            // formats={formats}
            value={content}
            onChange={setContent}
            placeholder="Tell your story..."
            modules={toolbarOptions}
            // renderCustomFormat={renderCodeBlock}
            className="bg-neutral-800/25 my-3 rounded-md p-2 w-full "
          />

          <button
            className="bg-[#40f877]/10  border w-full mt-7 border-[#40f877] p-2 rounded-md"
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>

        {/* <button style={{ marginTop: "5px" }}>Create Post</button> */}
      </div>
    </>
  );
}

export default Postpage;

// const initialValue = [
//   {
//     type: 'paragraph',
//     children: [{ text: 'A line of text in a paragraph.' }],
//   },
// ]

// const App = () => {
//   const [editor] = useState(() => withReact(createEditor()))

//   const renderElement = useCallback(props => {
//     switch (props.element.type) {
//       case 'code':
//         return <CodeElement {...props} />
//       default:
//         return <DefaultElement {...props} />
//     }
//   }, [])

//   // Define a leaf rendering function that is memoized with `useCallback`.
//   const renderLeaf = useCallback(props => {
//     return <Leaf {...props} />
//   }, [])

//   return (
//     <Slate editor={editor} initialValue={initialValue}>
//       <Editable
//         renderElement={renderElement}
//         // Pass in the `renderLeaf` function.
//         renderLeaf={renderLeaf}
//         onKeyDown={event => {
//           if (!event.ctrlKey) {
//             return
//           }

//           switch (event.key) {
//             case '`': {
//               event.preventDefault()
//               const [match] = Editor.nodes(editor, {
//                 match: n => n.type === 'code',
//               })
//               Transforms.setNodes(
//                 editor,
//                 { type: match ? null : 'code' },
//                 { match: n => Editor.isBlock(editor, n) }
//               )
//               break
//             }

//             case 'b': {
//               event.preventDefault()
//               Editor.addMark(editor, 'bold', true)
//               break
//             }
//           }
//         }}
//       />
//     </Slate>
//   )
// }

// const Leaf = props => {
//   return (
//     <span
//       {...props.attributes}
//       style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
//     >
//       {props.children}
//     </span>
//   )
// }
