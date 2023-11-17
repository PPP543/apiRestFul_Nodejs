import { Router } from "express";
import { methods as languageController} from "./../controllers/language.controller";

const router=Router();

router.get("/", languageController.getLanguages);
router.get("/:id", languageController.getLanguageId);
router.post("/", languageController.addLanguage);
router.put("/:id", languageController.updateLanguageId);
router.delete("/:id", languageController.deleteLanguageId);



export default router;