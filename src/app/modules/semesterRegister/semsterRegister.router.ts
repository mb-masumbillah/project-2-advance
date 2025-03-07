import { Router } from 'express';
import { semesterRegisterController } from './semesterRegister.controller';
import validationRequest from '../../../middleware/validationRequest';
import { SemesterRegistrationValidations } from './semesterRegister.validation';
import { USER_ROLE } from '../user/user.contatnt';
import { auth } from '../../../middleware/auth';

const router = Router();

router.post(
  '/create-semester-registration',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validationRequest(
    SemesterRegistrationValidations.createSemesterRegistrationValidationSchema,
  ),
  semesterRegisterController.createSemesterRegister,
);

router.get(
  '/:id',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student,
  ),
  semesterRegisterController.getSingleSemesterRegister,
);

router.patch(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validationRequest(
    SemesterRegistrationValidations.upadateSemesterRegistrationValidationSchema,
  ),
  semesterRegisterController.updateSemesterRegister,
);

router.delete(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  semesterRegisterController.deleteSemesterRegistration,
);

router.get(
  '/',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student,
  ),
  semesterRegisterController.getAllSemesterRegister,
);
export const SemesterRegister = router;
