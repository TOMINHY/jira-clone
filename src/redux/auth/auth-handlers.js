import { call, put } from "redux-saga/effects";
import {
  requestAllPriority,
  requestAllStatus,
  requestAllTaskType,
  requestAuthLogin,
  requestAuthRegister,
  requestCreateProjectCategory,
  requestCreateTask,
  requestGetAllProject,
  requestGetProjectDetail,
  requestGetUser,
  requestProjectCategory,
  requestUpdateProject,
  requestUpdateTaskInfo,
} from "./auth-requests";
import { toast } from "react-toastify";
import { TASK_ID, TOKEN, USER_ID, USER_NAME } from "utils/varSetting";
import {
  authUpdateUser,
  updateAllPriority,
  updateAllProJect,
  updateAllStatus,
  updateAllTaskType,
  updateProjectCategory,
  updateProjectDetail,
  updateTask,
  updateUser,
} from "./auth-slice";

export default function* handleAuthRegister({ payload }) {
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 200) {
      toast.success("Created new account successfully");
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleAuthLogin({ payload }) {
  if (payload.email === "") {
    toast.error("Please enter all information", {
      pauseOnHover: false,
      delay: false,
    });
  } else if (payload.password === "") {
    toast.error("Please enter all information", {
      pauseOnHover: false,
      delay: false,
    });
  } else {
    try {
      const response = yield call(requestAuthLogin, payload);
      if (response.status === 200) {
        yield put(
          authUpdateUser({
            user: {
              email: response.data.content.email,
              id: response.data.content.id,
              name: response.data.content.name,
              phoneNumber: response.data.content.phoneNumber,
            },
            accessToken: response.data.content.accessToken,
          })
        );
        localStorage.setItem(TOKEN, response.data.content.accessToken);
        let user = response.data.content;
        localStorage.setItem(USER_NAME, user.name);
        localStorage.setItem(USER_ID, user.id);
        toast.success("Login successfully!", {
          pauseOnHover: false,
          delay: false,
        });
      }
    } catch (error) {
      toast.error("Email or password is incorrect", {
        pauseOnHover: false,
        delay: false,
      });
    }
  }
}

function* handleGetAllProject() {
  const response = yield call(requestGetAllProject);
  if (response.status === 200) {
    yield put(
      updateAllProJect({
        projectList: response.data.content,
      })
    );
  }
}

function* handleGetProjectCategory() {
  const response = yield call(requestProjectCategory);
  if (response.status === 200) {
    yield put(
      updateProjectCategory({
        projectCategory: response.data.content,
      })
    );
  }
}

function* handleCreateProjectCategory({ payload }) {
  const response = yield call(requestCreateProjectCategory, payload);
  if (response.status === 200) {
    toast.success("Create ProjectCategory successfully!", {
      pauseOnHover: false,
      delay: false,
    });
  }
}

function* handleGetProjectDetail({ payload }) {
  const response = yield call(requestGetProjectDetail, payload);
  if (response.status === 200) {
    yield put(
      updateProjectDetail({
        projectDetail: response.data.content,
      })
    );
  }
}
function* handleUpdateProject({ payload }) {
  try {
    const response = yield call(requestUpdateProject, payload);
    if (response.status === 200) {
      toast.success("Update successfully!", {
        pauseOnHover: false,
        delay: false,
      });
    }
  } catch (error) {
    toast.error("Can't update someone else's project", {
      pauseOnHover: false,
      delay: false,
    });
  }
}

function* handleGetAllStatus() {
  const response = yield call(requestAllStatus);
  try {
    if (response.status === 200) {
      yield put(
        updateAllStatus({
          statusArr: response.data.content,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleGetAllPriority() {
  const response = yield call(requestAllPriority);
  try {
    if (response.status === 200) {
      yield put(
        updateAllPriority({
          priority: response.data.content,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleGetAllTaskType() {
  const response = yield call(requestAllTaskType);
  if (response.status === 200) {
    yield put(
      updateAllTaskType({
        taskTypeArr: response.data.content,
      })
    );
  }
}
function* handleGetUser() {
  const response = yield call(requestGetUser);
  try {
    if (response.status === 200) {
      yield put(
        updateUser({
          userList: response.data.content,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleCreateTask({ payload }) {
  const response = yield call(requestCreateTask, payload);
  console.log(response);
  try {
    if (response.status === 200) {
      yield put(
        updateTask({
          taskInfo: response.data.content,
        })
      );
      let task = response.data.content;
      console.log(task);
      localStorage.setItem(TASK_ID, task.taskId);
      toast.success("Create task successfully", {
        pauseOnHover: false,
        delay: false,
      });
    }
  } catch (error) {
    toast.error("Can not create task", {
      pauseOnHover: false,
      delay: false,
    });
  }
}

function* handleUpdateTaskInfo({ payload }) {
  const response = yield call(requestUpdateTaskInfo, payload);
  try {
    if (response.status === 200) {
      toast.success("Update successfully", {
        pauseOnHover: false,
        delay: false,
      });
    }
  } catch (error) {
    toast.error("Can not update", {
      pauseOnHover: false,
      delay: false,
    });
  }
}

export {
  handleAuthLogin,
  handleGetAllProject,
  handleGetProjectCategory,
  handleCreateProjectCategory,
  handleGetProjectDetail,
  handleUpdateProject,
  handleGetAllStatus,
  handleGetAllPriority,
  handleGetAllTaskType,
  handleGetUser,
  handleCreateTask,
  handleUpdateTaskInfo,
};
