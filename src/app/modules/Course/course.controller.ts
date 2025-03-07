import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { CourseServices } from './course.service';

const createCourses = catchAsync(async (req, res) => {
  const result = await CourseServices.createCoursesIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Course create successfull',
    data: result,
  });
});

const getAllCourses = catchAsync(async (req, res) => {
  const result = await CourseServices.getAllCoursesFromDB(req.query);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Course all data get successfull',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleCourses = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.getSingleCoursesFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Course Single Data get Successfull',
    data: result,
  });
});

const updateCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.updateCoursesIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'course update successfull',
    data: result,
  });
});

const deleteCourses = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.deleteCoursesFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Course data delete successfull',
    data: result,
  });
});

const assignFacultiesWithCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const {faculties} = req.body
  const result = await CourseServices.assignFacultiesWithCourseIntoDB(courseId, faculties);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Faculty assign successfull',
    data: result,
  });
});


const getFacultiesWithCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;

  const result = await CourseServices.getFacultiesWithCourseFromDB(courseId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Faculties retrieved succesfully',
    data: result,
  });
});

const removeFacultiesWithCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const {faculties} = req.body
  const result = await CourseServices.removeFacultiesWithCourseIntoDB(courseId, faculties);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Faculty remove successfull',
    data: result,
  });
});

export const CourseController = {
  createCourses,
  getAllCourses,
  getSingleCourses,
  updateCourse,
  deleteCourses,
  assignFacultiesWithCourse,
  getFacultiesWithCourse,
  removeFacultiesWithCourse
};
