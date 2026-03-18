import { Step1Page, Step2Page, Step3Page, SummaryPage } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Step1Page />} />
        <Route path="/step2" element={<Step2Page />} />
        <Route path="/step3" element={<Step3Page />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
