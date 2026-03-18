import { MainLayout } from '@/layouts'
import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Step1Page = lazy(() => import('@/pages/form/step1/step1'))
const Step2Page = lazy(() => import('@/pages/form/step2/step2'))
const Step3Page = lazy(() => import('@/pages/form/step3/step3'))
const SummaryPage = lazy(() => import('@/pages/form/summary/summary'))

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Step1Page />} />
        <Route path="/step2" element={<Step2Page />} />
        <Route path="/step3" element={<Step3Page />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
