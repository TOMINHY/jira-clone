const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
    projectList: [],
    projectCategory: [],
    projectDetail: undefined,
    projectInfo: undefined,
    statusArr: [],
    priority: [],
    taskTypeArr: [],
    userList: [],
    taskInfo: [],
  },
  reducers: {
    authLogin: (state, action) => ({
      ...state,
    }),
    authRegister: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authUpdateUser: (state, action) => ({
      ...state,
      user: action.payload.user,
      accessToken: action.payload.accessToken,
    }),
    getAllProject: (state, action) => ({}),
    updateAllProJect: (state, action) => ({
      ...state,
      projectList: action.payload.projectList,
    }),
    getProjectCategory: (state, action) => ({}),
    updateProjectCategory: (state, action) => ({
      projectCategory: action.payload.projectCategory,
    }),
    createProjectCategory: (state, action) => ({
      ...state,
    }),
    getProjectDetail: (state, action) => ({}),
    updateProjectDetail: (state, action) => ({
      ...state,
      projectDetail: action.payload.projectDetail,
    }),
    updateProjectInfo: (state, action) => ({
      ...state,
      projectInfo: action.payload.projectInfo,
    }),
    getAllStatus: (state, action) => ({}),
    getAllPriority: (state, action) => ({}),
    getAllTaskType: (state, action) => ({}),
    updateAllStatus: (state, action) => ({
      ...state,
      statusArr: action.payload.statusArr,
    }),
    updateAllPriority: (state, action) => ({
      ...state,
      priority: action.payload.priority,
    }),
    updateAllTaskType: (state, action) => ({
      ...state,
      taskTypeArr: action.payload.taskTypeArr,
    }),
    getUser: (state, action) => ({}),
    updateUser: (state, action) => ({
      ...state,
      userList: action.payload.userList,
    }),
    createTask: (state, action) => ({}),
    updateTask: (state, action) => ({
      ...state,
      taskInfo: action.payload.taskInfo,
    }),
    updateTaskInfo: (state, action) => ({}),
  },
});
export const {
  authLogin,
  authRegister,
  authUpdateUser,
  getAllProject,
  updateAllProJect,
  getProjectCategory,
  updateProjectCategory,
  createProjectCategory,
  getProjectDetail,
  updateProjectDetail,
  updateProjectInfo,
  getAllStatus,
  getAllPriority,
  getAllTaskType,
  updateAllStatus,
  updateAllPriority,
  updateAllTaskType,
  getUser,
  updateUser,
  createTask,
  updateTask,
  updateTaskInfo,
} = authSlice.actions;
export default authSlice.reducer;
