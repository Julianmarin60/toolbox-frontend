import {useDispatch, useSelector} from 'react-redux';
import {Dropdown, Table} from 'react-bootstrap';
import {useEffect, useState} from "react";
import {setData} from "./stores/global";

function App() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.global.data);
    const [files, setFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const url = "http://localhost:3000/files/";

    useEffect(() => {
        fetch(url+'list')
            .then(response => response.json())
            .then(json => {
                setFiles(json);
            });
        handleDropdownItemClick()
    }, []);

    const handleDropdownItemClick = (filter = null) => {
        setLoading(true);
        setSelectedFile(filter);
        let urlQuery = url+'data';
        if (filter) {
            urlQuery = `${urlQuery}?fileName=${filter}`;
        }
        fetch(urlQuery)
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    dispatch(setData([]));
                    setLoading(false)
                } else {
                    const transformedData = json.map(item => {
                        return item.lines.map(line => {
                            return {
                                file: item.file,
                                text: line.text,
                                number: line.number,
                                hex: line.hex
                            };
                        });
                    }).flat();
                    dispatch(setData(transformedData));
                    setLoading(false);
                }
            });
    }

    return (
        <div className="App">
            <header className="App-header">
                <h2>Toolbox</h2>

                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" name="filter">
                        {
                            selectedFile ? selectedFile : "Select file"
                        }
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {files.length > 0 && (<Dropdown.Item onClick={() => handleDropdownItemClick()}>
                            All files
                        </Dropdown.Item>)}
                        {files.length > 0 ? files.map((file, index) => {
                            return (
                                <Dropdown.Item key={index} onClick={() => handleDropdownItemClick(file)} >
                                    {file}
                                </Dropdown.Item>
                            );
                        }) : (
                            <Dropdown.Item>
                                No files found
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </header>
            <section className="Section-main">
                <Table striped bordered hover className="Tablet-main">
                    <thead>
                    <tr>
                        <th className="FileName-column">File name</th>
                        <th className="Text-column">Text</th>
                        <th className="Number-column">Number</th>
                        <th className="Hex-column">Hex</th>
                    </tr>
                    </thead>
                    {
                        loading && (
                            <tbody>
                            <tr>
                                <td colSpan="4">Loading...</td>
                            </tr>
                            </tbody>
                        )
                    }
                    {
                        data.length > 0 && !loading && (
                            <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.file}</td>
                                        <td>{item.text}</td>
                                        <td>{item.number}</td>
                                        <td>{item.hex}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        )
                    }
                    {
                        data.length === 0 && !loading && (
                            <tbody>
                            <tr>
                                <td colSpan="4">No data found</td>
                            </tr>
                            </tbody>
                        )
                    }
                </Table>
            </section>
        </div>
    );
}

export default App;
