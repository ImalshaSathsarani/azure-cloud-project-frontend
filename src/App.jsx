// import React, {useState, useEffect } from 'react';
// import './App.css';

// const BACKEND_API_URL = "https://YOUR-BACKEND-APP-SERVICE.azurewebsites.net";

// function App(){
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState('');
//   const [priority, setPriority] = useState('Medium');
//   const [file, setFile] = useState(null);
//   const [syncing, setSyncing] = useState(false);

//   const fetchTasks = async()=>{
//     try{
//       const res = await fetch(`${BACKEND_API_URL}/api/tasks`);
//       const data = await res.json();
//       if (Array.isArray(data)) {
//         setTasks(data);
//       }
//     }catch(e){
//       console.error('Error fetching tasks:', e.message);
//     }
//   };
  
//   useEffect(()=>{
//     fetchTasks();
//   },[]);


//   const handleTakeSubmission = async (e) =>{
//     e.preventDefault();
//     if (!title.trim()) return alert('Please enter a task title.');
//     setSyncing(true);
//     const payload = new FormData();
//     payload.append('title', title);
//     payload.append('priority', priority);
//     if (file) payload.append('file', file);
//     try{
//       const response = await fetch(`${BACKEND_API_URL}/api/tasks`,{
//         method: 'POST',
//         body: payload
//       });
//       if(response.ok){
//         setTitle('');
//         setPriority('Medium');
//         setFile(null);
//         document.getElementById('file-field').value = '';
//          await fetchTasks();
//       }

      

//     }catch(e){
//       console.error('Error submitting task:', e.message);
//     }finally{
//       setSyncing(false);
//     }   
 
 
//   };




//   return (
//     <div className="dashboard-root">
//       <nav className="glass-navbar">
//         <div className="nav-brand">
//           <span className="logo-accent">Azure</span> Core Task Engine
//         </div>
//         <div className="status-badge">
//           <div className="pulse-indicator"></div> Cloud Pipeline Live
//         </div>
//       </nav>

//       <div className="dashboard-grid">
//         {/* Left Hand Controller Column */}
//         <aside className="control-panel">
//           <div className="glass-card">
//             <h3>Dispatched Cloud Commands</h3>
//             <p className="card-subtitle">Direct upload routing across Azure distributed architecture.</p>

//             <form onSubmit={handleTakeSubmission}>
//               <div className="input-block">
//                 <label>Task Description</label>
//                 <input
//                   type="text"
//                   value={title}
//                   onChange={(e)=> setTitle(e.target.value)}
//                   placeholder="e.g., Audit SQA deployment logs"
//                 />
//               </div>

//               <div className="input-block">
//                 <label>Core Priority Tier</label>
//                 <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//                   <option value="Critical">🔴 Critical Tier</option>
//                   <option value="Medium">🟡 Operational</option>
//                   <option value="Low">🟢 Baseline</option>
//                 </select>
//               </div>

//               <div className="input-block">
//                 <label>Asset Attachment <span className="sub-label">(Direct Blob Stream)</span></label>
//                 <input 
//                   id="file-field"
//                   type="file" 
//                   onChange={(e) => setFile(e.target.files[0])}
//                 />
//               </div>

//               <button type="submit" className="action-btn" disabled={syncing}>
//                 {syncing ? "Syncing Workspace..." : "Commit Event Payload"}
//               </button>
//             </form>
//           </div>
//         </aside>

//         {/* Right Hand Output Data Matrix Panel */}
//         <main className="data-matrix">
//           <div className="glass-card full height">
//             <h3>Live Query Stream <span className="counter">({tasks.length} Active Node Elements)</span></h3>
//             <div className="table-wrapper">
//               <table className="matrix-table">
//                 <thead>
//                   <tr>
//                     <th>Element ID</th>
//                     <th>Task Parameter</th>
//                     <th>Priority Level</th>
//                     <th>Blob Storage Reference Link</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tasks.length === 0 ?(
//                     <tr>
//                       <td colSpan="4" className="empty-message">No records currently synchronized inside cloud data matrix.</td>
//                     </tr>

//                   ) : tasks.map((item)=>(
//                     <tr key={item.id} className="fade-in-row">
//                       <td className="mono">#00{item.id}</td>
//                       <td className="strong">{item.title}</td>
//                       <td>
//                         <span className={`badge status-${item.priority.toLowerCase()}`}>
//                           {item.priority}
//                         </span>
//                       </td>
//                       <td>
//                         {item.attachmentUrl ? (
//                           <a href={item.attachmentUrl} target="_blank" rel="noreferrer" className="asset-link">
//                             🔗 Inspect Asset Blob
//                           </a>
//                         ) : (
//                           <span className="muted-text">Null Value</span>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </main>


//       </div>
//     </div>
//   )
// }

// export default App

// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {

//   const [notes, setNotes] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const loadNotes = async () => {
//     const res = await axios.get(
//       "http://localhost:5000/notes"
//     );

//     setNotes(res.data);
//   };

//   useEffect(() => {
//     loadNotes();
//   }, []);

//   const addNote = async () => {

//     await axios.post(
//       "http://localhost:5000/notes",
//       {
//         title,
//         description
//       }
//     );

//     setTitle("");
//     setDescription("");

//     loadNotes();
//   };

//   const deleteNote = async (id) => {

//     await axios.delete(
//       `http://localhost:5000/notes/${id}`
//     );

//     loadNotes();
//   };

//   return (
//     <div className="container">

//       <div className="hero">
//         <h1>☁️ Cloud Notes Manager</h1>
//         <p>Azure Full Stack Deployment Demo</p>
//       </div>

//       <div className="form-card">

//         <input
//           placeholder="Title"
//           value={title}
//           onChange={(e)=>setTitle(e.target.value)}
//         />

//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e)=>setDescription(e.target.value)}
//         />

//         <button onClick={addNote}>
//           Add Note
//         </button>

//       </div>

//       <div className="notes-grid">

//         {notes.map(note => (

//           <div className="card" key={note.id}>

//             <h3>{note.title}</h3>

//             <p>{note.description}</p>

//             <button
//               onClick={() => deleteNote(note.id)}
//             >
//               Delete
//             </button>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// }

// // export default App;
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";

// // ⚠️ REMEMBER: When deploying to production, change this local address 
// // to your live Azure App Service Backend URL (e.g., https://your-backend.azurewebsites.net)
// const API_BASE_URL = "http://localhost:5000";

// function App() {
//   const [notes, setNotes] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   // New state to hold the selected binary file/image object
//   const [image, setImage] = useState(null); 
//   const [loading, setLoading] = useState(false);

//   // Function to load notes from the API
//   const loadNotes = async () => {
//     try {
//       const res = await axios.get(`${API_BASE_URL}/notes`);
//       setNotes(res.data);
//     } catch (err) {
//       console.error("Error loading notes from data pool:", err);
//     }
//   };

//   useEffect(() => {
//     loadNotes();
//   }, []);

//   // Updated function to handle text parameters and multipart file streaming
//   const addNote = async (e) => {
//     e.preventDefault(); // Prevents page reload on form submit
//     if (!title.trim() || !description.trim()) {
//       alert("Please provide both a title and description.");
//       return;
//     }

//     setLoading(true);

//     // Using FormData instead of standard JSON to allow binary file transmission
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
    
//     if (image) {
//       formData.append("image", image); // Appends the raw file object selected by the user
//     }

//     try {
//       await axios.post(`${API_BASE_URL}/notes`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data", // Instructs backend middleware (like Multer) to parse a file stream
//         },
//       });

//       // Clear standard form inputs on success
//       setTitle("");
//       setDescription("");
//       setImage(null);
      
//       // Reset the file picker input value in the browser UI
//       const fileInput = document.getElementById("file-picker");
//       if (fileInput) fileInput.value = "";

//       // Refresh the notes layout grid
//       loadNotes();
//     } catch (err) {
//       console.error("Failed to commit payload to cloud pipeline:", err);
//       alert("Error saving note asset.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteNote = async (id) => {
//     try {
//       await axios.delete(`${API_BASE_URL}/notes/${id}`);
//       loadNotes();
//     } catch (err) {
//       console.error("Failed to delete record element:", err);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="hero">
//         <h1>☁️ Cloud Notes Manager</h1>
//         <p>Azure Full Stack Deployment Demo</p>
//       </div>

//       <div className="form-card">
//         <form onSubmit={addNote}>
//           <input
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />

//           <textarea
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />

//           {/* New Input block to accept image attachments */}
//           <div className="file-input-wrapper">
//             <label htmlFor="file-picker" className="file-label">
//               Attach Asset Reference (Azure Blob Upload):
//             </label>
//             <input
//               id="file-picker"
//               type="file"
//               accept="image/*"
//               onChange={(e) => setImage(e.target.files[0])}
//             />
//           </div>

//           <button type="submit" disabled={loading}>
//             {loading ? "Uploading to Cloud..." : "Add Note"}
//           </button>
//         </form>
//       </div>

//       <div className="notes-grid">
//         {notes.map((note) => (
//           <div className="card" key={note.id}>
            
//             {/* If the item has a valid Azure Blob public URL stored, render it dynamically */}
//             {note.imageUrl && (
//               <div className="card-image-wrapper">
//                 <img 
//                   src={note.imageUrl} 
//                   alt={note.title} 
//                   className="note-image" 
//                 />
//               </div>
//             )}

//             <div className="card-content">
//               <h3>{note.title}</h3>
//               <p>{note.description}</p>
//               <button onClick={() => deleteNote(note.id)} className="delete-btn">
//                 Delete
//               </button>
//             </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";

// // ⚠️ REMEMBER: When deploying to production, change this local address 
// // to your live Azure App Service Backend URL (e.g., https://your-backend.azurewebsites.net)
// const API_BASE_URL = "http://localhost:5000";

// function App() {
//   const [notes, setNotes] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null); 
//   const [loading, setLoading] = useState(false);

//   // Function to load notes from the API
//   const loadNotes = async () => {
//     try {
//       const res = await axios.get(`${API_BASE_URL}/notes`);
//       setNotes(res.data);
//     } catch (err) {
//       console.error("Error loading notes from data pool:", err);
//     }
//   };

//   useEffect(() => {
//     loadNotes();
//   }, []);

//   const addNote = async (e) => {
//     e.preventDefault(); 
//     if (!title.trim() || !description.trim()) {
//       alert("Please provide both a title and description.");
//       return;
//     }

//     setLoading(true);

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
    
//     if (image) {
//       formData.append("image", image); 
//     }

//     try {
//       await axios.post(`${API_BASE_URL}/notes`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data", 
//         },
//       });

//       setTitle("");
//       setDescription("");
//       setImage(null);
      
//       const fileInput = document.getElementById("file-picker");
//       if (fileInput) fileInput.value = "";

//       loadNotes();
//     } catch (err) {
//       console.error("Failed to commit payload to cloud pipeline:", err);
//       alert("Error saving note asset.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteNote = async (id) => {
//     try {
//       await axios.delete(`${API_BASE_URL}/notes/${id}`);
//       loadNotes();
//     } catch (err) {
//       console.error("Failed to delete record element:", err);
//     }
//   };

//   const hasNotes = notes.length > 0;

//   return (
//     <div className="container">
//       <div className="hero">
//         <h1>☁️ Cloud Notes Manager</h1>
//         <p>Azure Full Stack Deployment Demo</p>
//       </div>

//       {/* Dynamic Master Wrapper Layout */}
//       <div className={`workspace-layout ${hasNotes ? "split-view" : "centered-view"}`}>
        
//         {/* Creation Entry Form Portal Block */}
//         <div className="form-card">
//           <h2>Create Cloud Note</h2>
//           <form onSubmit={addNote}>
//             <input
//               type="text"
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />

//             <textarea
//               placeholder="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             />

//             <div className="file-input-wrapper">
//               <label htmlFor="file-picker" className="file-label">
//                 Attach Asset Reference (Azure Blob Upload):
//               </label>
//               <input
//                 id="file-picker"
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setImage(e.target.files[0])}
//               />
//             </div>

//             <button type="submit" disabled={loading}>
//               {loading ? "Uploading to Cloud..." : "Add Note"}
//             </button>
//           </form>
//         </div>

//         {/* Dynamic Target Stream Block (Only displays on the right side when items match) */}
//         {hasNotes && (
//           <div className="notes-stream-panel">
//             <h2>Synchronized Repositories ({notes.length})</h2>
//             <div className="notes-vertical-stack">
//               {notes.map((note) => (
//                 <div className="card" key={note.id}>
                  
//                   <div className="card-header">
//                     <h3>{note.title}</h3>
//                   </div>

//                   {note.imageUrl && (
//                     <div className="card-image-wrapper">
//                       <img 
//                         src={note.imageUrl} 
//                         alt={note.title} 
//                         className="note-image" 
//                       />
//                     </div>
//                   )}

//                   <div className="card-content">
//                     <p>{note.description}</p>
//                     <div className="card-actions">
//                       <button onClick={() => deleteNote(note.id)} className="delete-btn">
//                         Delete Note
//                       </button>
//                     </div>
//                   </div>

//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// export default App;
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// ⚠️ REMEMBER: When deploying to production, change this local address 
// to your live Azure App Service Backend URL (e.g., https://your-backend.azurewebsites.net)
const API_BASE_URL = "https://azure-cloud-notes-backend-api-accag7f4dhhzasbu.malaysiawest-01.azurewebsites.net";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); 
  const [loading, setLoading] = useState(false);

  // Function to load notes from the API
  const loadNotes = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/notes`);
      setNotes(res.data);
    } catch (err) {
      console.error("Error loading notes from data pool:", err);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const addNote = async (e) => {
    e.preventDefault(); 
    if (!title.trim() || !description.trim()) {
      alert("Please provide both a title and description.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    
    if (image) {
      formData.append("image", image); 
    }

    try {
      await axios.post(`${API_BASE_URL}/notes`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });

      setTitle("");
      setDescription("");
      setImage(null);
      
      const fileInput = document.getElementById("file-picker");
      if (fileInput) fileInput.value = "";

      loadNotes();
    } catch (err) {
      console.error("Failed to commit payload to cloud pipeline:", err);
      alert("Error saving note asset.");
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/notes/${id}`);
      loadNotes();
    } catch (err) {
      console.error("Failed to delete record element:", err);
    }
  };

  const hasNotes = notes.length > 0;

  return (
    <div className="container">
      <div className="hero">
        <h1>☁️ Cloud Notes Manager</h1>
        <p>Azure Full Stack Deployment Demo</p>
      </div>

      {/* Dynamic Master Wrapper Layout */}
      <div className={`workspace-layout ${hasNotes ? "split-view" : "centered-view"}`}>
        
        {/* Creation Entry Form Portal Block */}
        <div className="form-card">
          <h2>Create Cloud Note</h2>
          <form onSubmit={addNote}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <div className="file-input-wrapper">
              <label htmlFor="file-picker" className="file-label">
                Attach Asset Reference (Azure Blob Upload):
              </label>
              <input
                id="file-picker"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Uploading to Cloud..." : "Add Note"}
            </button>
          </form>
        </div>

        {/* Dynamic Target Stream Block */}
        {hasNotes && (
          <div className="notes-stream-panel">
            <h2>Synchronized Repositories ({notes.length})</h2>
            <div className="notes-vertical-stack">
              {notes.map((note) => (
                <div className="card" key={note.id}>
                  
                  <div className="card-header">
                    <h3>{note.title}</h3>
                  </div>

                  {/* FIXED: Changed from note.imageUrl to note.image_url */}
                  {note.image_url && (
                    <div className="card-image-wrapper">
                      <img 
                        src={note.image_url} 
                        alt={note.title} 
                        className="note-image" 
                      />
                    </div>
                  )}

                  <div className="card-content">
                    <p>{note.description}</p>
                    <div className="card-actions">
                      <button onClick={() => deleteNote(note.id)} className="delete-btn">
                        Delete Note
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;