import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { jsPDF } from 'jspdf';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [status, setStatus] = useState('ativo'); // 'ativo', 'em_andamento', 'pendente'
  const [exportando, setExportando] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getStatusInfo = () => {
    const statusMap = {
      ativo: {
        label: 'Ativo',
        color: '#10b981',
        icon: '✓',
        description: 'PGR está em conformidade'
      },
      em_andamento: {
        label: 'Em Andamento',
        color: '#f59e0b',
        icon: '↻',
        description: 'Revisão em processo'
      },
      pendente: {
        label: 'Pendente',
        color: '#ef4444',
        icon: '!',
        description: 'Requer atenção imediata'
      }
    };
    return statusMap[status];
  };

  const handleExportPDF = () => {
    setExportando(true);

    // Simula um pequeno delay para dar feedback ao usuário
    setTimeout(() => {
      const doc = new jsPDF();

      // Adiciona conteúdo ao PDF
      doc.setFontSize(20);
      doc.text('Relatório PGR', 20, 20);

      doc.setFontSize(12);
      doc.text('TechSafety Solutions LTDA', 20, 35);
      doc.text(`Data de emissão: ${new Date().toLocaleDateString('pt-BR')}`, 20, 45);
      doc.text(`Gerado por: ${user?.usuario || 'Sistema'}`, 20, 55);

      doc.setFontSize(14);
      doc.text('Status do PGR', 20, 75);
      doc.setFontSize(12);
      doc.text(`Status atual: ${getStatusInfo().label}`, 20, 85);
      doc.text(`Descrição: ${getStatusInfo().description}`, 20, 95);

      doc.setFontSize(10);
      doc.text('Este é um relatório simulado gerado pelo sistema de demonstração.', 20, 120);
      doc.text('Em produção, este documento conteria informações detalhadas sobre:', 20, 130);
      doc.text('- Análise de riscos identificados', 20, 140);
      doc.text('- Medidas de controle implementadas', 20, 150);
      doc.text('- Cronograma de ações preventivas', 20, 160);
      doc.text('- Treinamentos realizados', 20, 170);
      doc.text('- Indicadores de segurança', 20, 180);

      // Salva o PDF
      doc.save(`relatorio-pgr-${new Date().getTime()}.pdf`);

      setExportando(false);
    }, 800);
  };

  const statusInfo = getStatusInfo();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <h1>TechSafety Solutions</h1>
            <p>Sistema de Gestão de Riscos</p>
          </div>
          <div className="header-right">
            <span className="user-info">👤 {user?.usuario}</span>
            <button onClick={handleLogout} className="btn-logout">
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-content">
          <h2 className="page-title">Dashboard</h2>

          <div className="cards-grid">
            {/* Card Status PGR */}
            <div className="card status-card">
              <div className="card-header">
                <h3>Status do PGR</h3>
                <div className="status-selector">
                  <button
                    className={`status-btn ${status === 'ativo' ? 'active' : ''}`}
                    onClick={() => setStatus('ativo')}
                    title="Mudar para Ativo"
                  >
                    ✓
                  </button>
                  <button
                    className={`status-btn ${status === 'em_andamento' ? 'active' : ''}`}
                    onClick={() => setStatus('em_andamento')}
                    title="Mudar para Em Andamento"
                  >
                    ↻
                  </button>
                  <button
                    className={`status-btn ${status === 'pendente' ? 'active' : ''}`}
                    onClick={() => setStatus('pendente')}
                    title="Mudar para Pendente"
                  >
                    !
                  </button>
                </div>
              </div>
              <div className="status-content">
                <div
                  className="status-indicator"
                  style={{ backgroundColor: statusInfo.color }}
                >
                  <span className="status-icon">{statusInfo.icon}</span>
                </div>
                <div className="status-info">
                  <h4 style={{ color: statusInfo.color }}>{statusInfo.label}</h4>
                  <p>{statusInfo.description}</p>
                </div>
              </div>
              <div className="status-date">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </div>
            </div>

            {/* Card Ações */}
            <div className="card actions-card">
              <div className="card-header">
                <h3>Ações Rápidas</h3>
              </div>
              <div className="actions-content">
                <button
                  onClick={handleExportPDF}
                  className="btn-action btn-export"
                  disabled={exportando}
                >
                  {exportando ? (
                    <>
                      <span className="spinner"></span>
                      Gerando PDF...
                    </>
                  ) : (
                    <>
                      📄 Exportar Relatório PDF
                    </>
                  )}
                </button>
                <button className="btn-action btn-secondary" disabled>
                  📊 Análise de Riscos
                </button>
                <button className="btn-action btn-secondary" disabled>
                  📋 Checklist de Segurança
                </button>
              </div>
              <div className="card-footer">
                <small>💡 Clique em "Exportar Relatório" para gerar o PDF</small>
              </div>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="info-section">
            <div className="info-card">
              <h4>📈 Indicadores</h4>
              <div className="metric">
                <span>Riscos Identificados:</span>
                <strong>24</strong>
              </div>
              <div className="metric">
                <span>Ações Implementadas:</span>
                <strong>18</strong>
              </div>
              <div className="metric">
                <span>Em Andamento:</span>
                <strong>6</strong>
              </div>
            </div>

            <div className="info-card">
              <h4>📅 Próximas Ações</h4>
              <ul className="actions-list">
                <li>Treinamento de brigada - 15/11/2025</li>
                <li>Inspeção de EPIs - 20/11/2025</li>
                <li>Revisão do PGR - 30/11/2025</li>
              </ul>
            </div>

            <div className="info-card">
              <h4>ℹ️ Sobre o Sistema</h4>
              <p className="info-text">
                Este é um protótipo de demonstração do sistema de gestão PGR.
                Versão: 1.0.0
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
