import IconDelete from "components/icon/IconDelete";
import IconEdit from "components/icon/IconEdit";
import { Table } from "components/table";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getAllProject } from "redux/auth/auth-slice";

const DashboardContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllProject());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { projectList } = useSelector((state) => state.auth);
  const [projectArr, setProjectArr] = useState([]);
  useEffect(() => {
    if (!projectList) {
      return;
    }
    setProjectArr(projectList);
  }, [projectList]);
  let currentPage = 1;
  let [nowPage, setNowPage] = useState(currentPage);
  let perPage = 10;
  let totalPage = 0;
  let perProject = projectList?.slice(
    (nowPage - 1) * perPage,
    (nowPage - 1) * perPage + perPage
  );

  function renderPageNumber() {
    let newTotal = [];
    totalPage = Math.ceil(projectList?.length / perPage);
    for (let i = 1; i <= totalPage; i++) {
      newTotal.push(i);
    }
    return newTotal.map((item) => {
      const navLinkClass = `block w-[30px] h-[30px] flex items-center justify-center rounded-lg border border-gray-200 cursor-pointer`;
      return (
        <NavLink
          key={item}
          className="navlink"
          onClick={() => handleNumberPage(item)}
        >
          {item === nowPage ? (
            <span className={`${navLinkClass} text-white bg-[#1DC071]`}>
              {item}
            </span>
          ) : (
            <span className="text-black-500">{item}</span>
          )}
        </NavLink>
      );
    });
  }
  function handleNumberPage(num) {
    nowPage = num;
    perProject = projectList?.slice(
      (nowPage - 1) * perPage,
      (nowPage - 1) * perPage + perPage
    );
    setNowPage(nowPage);
    setProjectArr(perProject);
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function getName(name) {
    let newName = name.toUpperCase().split("");
    let firstName = newName[0];
    let lastName = newName[newName.length - 1];
    let fullName = `${firstName}${lastName}`;
    return fullName;
  }
  // const handleClickEdit = (id) => {
  //   dispatch(getProjectDetail(id));
  // };
  if (!projectList) return null;
  return (
    <div className="p-10 flex-1">
      <div className="flex flex-col gap-y-3 mb-5">
        <h1 className="text-3xl font-medium">Project management</h1>
        <div className="flex items-center gap-x-3">
          <button className="px-2 py-1 hover:bg-gray-200 transition-all border boder-gray-200 rounded">
            Sort age
          </button>
          <button className="px-2 py-1 hover:bg-gray-200 transition-all border boder-gray-200 rounded">
            Clear filters
          </button>
          <button className="px-2 py-1 hover:bg-gray-200 transition-all border boder-gray-200 rounded">
            Clear filters and sorters
          </button>
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>
              <div className="w-[150px]">projectName</div>
            </th>
            <th>category</th>
            <th>creator</th>
            <th>members</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projectArr.length > 0 &&
            projectArr.map((project) => {
              const { members } = project;
              return (
                <tr key={project.id}>
                  <td>{project?.id}</td>
                  <td title={project.projectName}>
                    <div className="w-[150px]">
                      {project?.projectName.slice(0, 5) + "..."}
                    </div>
                  </td>
                  <td>{project?.categoryName}</td>
                  <td>
                    <div className="flex items-center justify-center p-1 border border-green-500 text-green-500 bg-green-400 bg-opacity-10 font-bold rounded">
                      {project?.creator?.name}
                    </div>
                  </td>
                  <td>
                    {members.length > 0 ? (
                      <div className="flex items-center gap-x-2">
                        {members.slice(0, 2).map((member) => (
                          <div key={member.userId}>
                            <div className="w-8 h-8 rounded-full bg-[#DDDDDD] flex items-center justify-center text-xs">
                              {getName(member?.name)}
                            </div>
                          </div>
                        ))}
                        <div className="w-8 h-8 rounded-full bg-[#DDDDDD] border border-gray-200 flex items-center justify-center text-xs cursor-pointer">
                          ...
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs cursor-pointer">
                          +
                        </div>
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs cursor-pointer">
                        +
                      </div>
                    )}
                  </td>
                  <td>
                    <div className="flex gap-x-2 cursor-pointer">
                      <IconEdit
                        onClick={() => {
                          navigate(`/edit/${project.id}`);
                        }}
                      ></IconEdit>
                      <IconDelete></IconDelete>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <div className="mt-10 flex items-center justify-center gap-x-5">
        {renderPageNumber()}
      </div>
    </div>
  );
};

export default DashboardContent;
