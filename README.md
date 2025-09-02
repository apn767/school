export const readme = `
# SchoolScout


A polished, responsive Next.js + MySQL mini-project with two pages as required.


## Tech
- Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- Prisma ORM with MySQL
- React Hook Form + Zod


## Getting Started
1. Clone and install
```bash
npm i
```
2. Create `.env`
```env
DATABASE_URL="mysql://user:pass@localhost:3306/schoolscout"
```
3. Prisma migrate
```bash
npx prisma migrate dev --name init
```
4. Run dev server
```bash
npm run dev
```
5. Open http://localhost:3000/addSchool to add, and http://localhost:3000/showSchools to browse.


## Image storage
- Images are saved under `public/schoolImages`. This meets the assignment requirement.
- *Note:* On Vercel/Netlify, writing to the filesystem at runtime isn't persistent. For production, use an object storage (S3/Cloudinary) and keep the same public path convention.


## Deploy
- Push to GitHub; connect the repo to Vercel. Set `DATABASE_URL` in Vercel Project Settings → Environment Variables.
- Ensure the DB is reachable from Vercel (use PlanetScale/AWS RDS/Neon for MySQL-compatible hosting).


## API
- `POST /api/schools` — JSON body with school details (after uploading the image).
- `GET /api/schools?q=..&state=..&sort=name|city|new` — list schools.


## Accessibility & UX
- Keyboard-friendly forms and controls.
- Responsive card grid with semantic roles and alt text.
- Graceful empty states and errors.


## Notes
- This repo includes minimal UI wrappers instead of full shadcn to keep the project copy-paste ready.
`}