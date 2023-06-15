import express from "express";
import type {Request, Response } from "express";
import { validate } from "express-validation";

import * as moviestarsService from "./moviestar.service";

export const moviestarsRouter = express.Router();